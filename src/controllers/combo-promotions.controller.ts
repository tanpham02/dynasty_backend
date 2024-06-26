/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Params } from '@app/types/common.types';

import { ComboPromotionModel } from '@app/models';
import { ComboPromotionsService } from '@app/services';
import { Request, Response } from 'express';

const comboService = new ComboPromotionsService(ComboPromotionModel, 'combo promotions');

const comboPromotionsController = {
  // SEARCH PAGINATION COMBO PROMOTIONS
  search: async (req: Request, res: Response) => {
    const { pageIndex = 0, pageSize = 10, name, categoryId } = req.query;
    try {
      const params: Params = {
        pageIndex: Number(pageIndex),
        pageSize: Number(pageSize),
        name: String(name),
        categoryId: categoryId?.toString(),
      };
      //   const comboPromotions = await comboService.getPagination(params);
      //   res.status(200).json(comboPromotions);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // CREATE COMBO PROMOTIONS
  create: async (req: Request, res: Response) => {
    try {
      const comboPromotions = await comboService.createOverriding(req);
      res.status(200).json(comboPromotions);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // UPDATE COMBO PROMOTIONS
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    // try {
    //   const comboPromotions = await comboService.update(id, req);
    //   res.status(200).json(comboPromotions);
    // } catch (error) {
    //   res.status(500).json(error);
    // }
  },

  // GET COMBO PROMOTIONS BY ID
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      //   const comboPromotions = await comboService.getById(id);
      //   if (!comboPromotions) {
      //     return res.status(404).json(`Not found combo promotion`);
      //   }
      //   res.status(200).json(comboPromotions);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE COMBO PROMOTIONS
  delete: async (req: Request, res: Response) => {
    const { ids } = req.query;
    try {
      const { message } = await comboService.deleteOverriding(ids);

      res.status(200).json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default comboPromotionsController;
