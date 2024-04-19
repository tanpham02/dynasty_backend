import { Schema, model } from 'mongoose';
import { Product, ProductType } from '../types/products.type';
import { Status } from '@app/types';

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
 *         description:
 *           type: string
 *         information:
 *           type: string
 *         image:
 *           type: string
 *         price:
 *           type: number
 *         oldPrice:
 *           type: number
 *         orderQuantity:
 *           type: number
 *         status:
 *           type: string
 *           enum:
 *              - ACTIVE
 *              - INACTIVE
 *           default: "ACTIVE"
 *         types:
 *           type: array
 *           items:
 *              type: string
 *              enum:
 *                 - NORMAL
 *                 - NEW
 *                 - BEST_SELLER
 *                 - DELICIOUS_MUST_TRY
 *                 - VEGETARIAN
 *                 - SPICY
 *                 - UNIQUE
 *         attributeMapping:
 *           type: array
 *           items:
 *             type: string
 *         productAttributeList:
 *           type: array
 *           items:
 *              type: object
 *              properties:
 *                extendedName:
 *                   type: string
 *                extendedValue:
 *                   type: string
 *                productAttributeItem:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                          attributeId:
 *                             type: string
 *                          priceAdjustmentValue:
 *                             type: number
 *         productsVariant:
 *           type: array
 *           items:
 *              type: string
 *         visible:
 *           type: boolean
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
    images: {
      type: [String],
    },
    status: {
      type: String,
      enum: Status,
      default: Status.ACTIVE,
    },
    types: {
      type: [String],
      enum: ProductType,
      default: [ProductType.NORMAL],
    },
    orderQuantity: {
      type: Number,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    attributeMapping: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ProductAttribute',
      },
    ],
    productAttributeList: [
      {
        extendedName: {
          type: String,
        },
        extendedValue: {
          type: String,
        },
        productAttributeItem: [
          {
            attributeId: {
              type: String,
            },
            // attributeId: {
            //   type: Schema.Types.ObjectId,
            //   ref: 'ProductAttribute',
            // },
            priceAdjustmentValue: {
              type: Number,
            },
          },
        ],
      },
    ],
    productsVariant: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ProductVariant',
      },
    ],
    slug: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const ProductModel = model('Product', ProductSchema);

export default ProductModel;
export { ProductSchema };