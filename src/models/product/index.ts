import { Schema, model } from 'mongoose';
import { Product, ProductType } from './@type';
import { Status } from '@app/constants';
import { ProductVariantsSchema } from '../productVariant';

// RESPONSE  DESCRIPTION
/**
 * @swagger
 * components:
 *   schema:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         name:
 *           type: string
 *         categoryId:
 *           type: string
 *         price:
 *           type: number
 *         oldPrice:
 *           type: number
 *         description:
 *           type: string
 *         information:
 *           type: string
 *         image:
 *           type: string
 *         orderQuantity:
 *           type: number
 *         status:
 *           type: string
 *           enum:
 *              - ACTIVE
 *              - IN_ACTIVE
 *         types:
 *           type: array
 *           enum:
 *              - NORMAL
 *              - NEW
 *              - BEST_SELLER
 *              - DELICIOUS_MUST_TRY
 *              - VEGETARIAN
 *              - SPICY
 *         productVariantId:
 *           type: string
 */

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    information: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: Status,
      default: Status.ACTIVE,
    },
    types: {
      type: [String],
      enum: [
        ProductType.NORMAL,
        ProductType.NEW,
        ProductType.BEST_SELLER,
        ProductType.DELICIOUS_MUST_TRY,
        ProductType.VEGETARIAN,
        ProductType.SPICY,
        ProductType.UNIQUE,
      ],
      default: [ProductType.NORMAL],
    },
    orderQuantity: {
      type: Number,
    },
    productVariantId: {
      type: Schema.Types.ObjectId,
      ref: 'ProductVariant',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const ProductModel = model('Product', ProductSchema);

export default ProductModel;
