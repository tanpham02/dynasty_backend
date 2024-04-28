// NOTE: Location Base
/**
 * @swagger
 * components:
 *   schemas:
 *     LocationBase:
 *       type: object
 *       properties:
 *           location:
 *              type: string
 *           cityId:
 *              type: string
 *           city:
 *              type: string
 *           district:
 *              type: string
 *           districtId:
 *              type: string
 *           ward:
 *              type: string
 *           wardId:
 *              type: string
 *           latitude:
 *              type: string
 *           longitude:
 *              type: string
 */

// NOTE: Base Model
/**
 * @swagger
 * components:
 *    schemas:
 *       BaseModel:
 *          type: object
 *          properties:
 *             _id:
 *                type: string
 *             status:
 *                type: string
 *                enum:
 *                   - ACTIVE
 *                   - INACTIVE
 *                   - INCOMING
 */
