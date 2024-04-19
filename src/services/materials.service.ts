/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Model } from 'mongoose';
import { Material } from '@app/types/materials.type';
import CRUDService from './CRUD.service';
import { Request } from 'express';
import { FIELDS_NAME } from '@app/constants/app';
import { HttpStatusCode } from '@app/types';
import Exception from '@app/exception';
import { comparingObjectId } from '@app/utils/comparing-objectId.util';

class MaterialService extends CRUDService<Material> {
  constructor(model: Model<Material>, nameService: string) {
    super(model, nameService);
  }

  // CREATE MATERIAL
  async createOverriding(req: Request) {
    const bodyRequest: Material = JSON.parse(req.body?.[FIELDS_NAME.MATERIAL]);
    try {
      const totalPrice = bodyRequest.materialInfo?.reduce((acc: any, next) => {
        if (next && next.price && next.quantity) {
          return acc + next.price * next.quantity;
        }
      }, 0);
      const newMaterial = new this.model({ ...bodyRequest, totalPrice });
      await newMaterial.save();
      return newMaterial;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  // UPDATE MATERIAL
  async updateOverriding(id: string, req: Request) {
    const bodyRequest: Material = JSON.parse(req.body?.[FIELDS_NAME.MATERIAL]);
    const materialDetail = await this.getById(id);

    if (!materialDetail) {
      const exception = new Exception(HttpStatusCode.NOT_FOUND, 'Not found material');
      throw exception;
    }
    const totalPrice = bodyRequest.materialInfo?.reduce((acc: any, next) => {
      if (next && next.price && next.quantity) {
        return acc + next.price * next.quantity;
      }
    }, 0);

    const dateUpdate = { ...bodyRequest, totalPrice };
    await materialDetail.updateOne(dateUpdate, { new: true });

    return { message: 'Update materia success' };
  }

  // DELETE MATERIAL
  async deleteOverriding(materialId: string) {
    const material = await this.model.findOne({
      $or: [{ _id: materialId }, { 'materialInfo._id': materialId }],
    });

    if (!material) {
      const exception = new Exception(HttpStatusCode.NOT_FOUND, 'Not found material');
      throw exception;
    }

    if (comparingObjectId(materialId, material._id)) {
      return await this.model.findOneAndDelete({ _id: materialId });
    }

    return await this.model.findOneAndUpdate(
      { 'materialInfo._id': materialId },
      {
        $pull: { materialInfo: { _id: materialId } },
      },
      { new: true },
    );
  }
}

export default MaterialService;