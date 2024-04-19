import { Schema, model } from 'mongoose';
import { Category, ChildCategory } from '../types/category.type';
import { Status } from '@app/types';

// RESPONSE DESCRIPTION
/**
 * @swagger
 * components:
 *  schema:
 *    Category:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *        status:
 *          type: string
 *          default: "ACTIVE"
 *          enum:
 *             - ACTIVE
 *             - INACTIVE
 *        products:
 *          type: array
 *          items:
 *            type: string
 *
 *        childrenCategory:
 *          type: object
 *          properties:
 *              parentId:
 *                type: string
 *              category:
 *                type: array
 *                items:
 *                   $ref: '#/components/schema/Category'
 *        slug:
 *          type: string
 *        priority:
 *          type: number
 *        visible:
 *          type: boolean
 *        isShowHomePage:
 *          type: boolean
 *          default: true
 */

const CategorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: Status,
      default: Status.ACTIVE,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    priority: {
      type: Number,
    },
    avatar: {
      type: String,
    },
    visible: {
      type: Boolean,
    },
    isShowHomePage: {
      type: Boolean,
      default: true,
    },
    slug: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const ChildCategorySchema = new Schema<ChildCategory>({
  parentId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  category: {
    type: [CategorySchema],
  },
});

CategorySchema.add({ childrenCategory: { type: ChildCategorySchema } });

const CategoryModel = model('Category', CategorySchema);

export default CategoryModel;