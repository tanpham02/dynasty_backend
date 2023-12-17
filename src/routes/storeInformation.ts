import { FIELDS_NAME } from '@app/constants';
import storeInformationController from '@app/controllers/storeInformation';
import { formDataParser } from '@app/middlewares/formDataParser';
import express from 'express';
const router = express.Router();

/**
 * @swagger
 * '/api/store-information/search-all':
 *  get:
 *     tags: [Store Information]
 *     summary: Search pagination
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schema/Store Information'
 */

//SEARCH PAGINATION
router.get('/search-all', storeInformationController.searchAll);

/**
 * @swagger
 * '/api/store-information':
 *  post:
 *     tags: [Store Information]
 *     summary: Create
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *             schema:
 *                type: object
 *                properties:
 *                   storeInformationInfo:
 *                        $ref: '#/components/schema/Store Information'

 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schema/Store Information'
 */

// CREATE
router.post('/', formDataParser(FIELDS_NAME.STORE_INFORMATION), storeInformationController.create);

/**
 * @swagger
 * '/api/store-information/{id}':
 *  patch:
 *     tags: [Store Information]
 *     summary: Update
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *             schema:
 *                type: object
 *                properties:
 *                   storeInformationInfo:
 *                        $ref: '#/components/schema/Store Information'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schema/Store Information'
 */

// UPDATE
router.patch(
  '/:id',
  formDataParser(FIELDS_NAME.STORE_INFORMATION),
  storeInformationController.update,
);

/**
 * @swagger
 * '/api/store-information/{id}':
 *  get:
 *     tags: [Store Information]
 *     summary: Get by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schema/Store Information'
 */

// GET  BY ID
router.get('/:id', storeInformationController.getById);

/**
 * @swagger
 * '/api/store-information/':
 *  delete:
 *     tags: [Store Information]
 *     summary: Delete
 *     parameters:
 *       - in: query
 *         name: ids
 *         schema:
 *           type: array
 *           item: string
 *         required: true

 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schema/Store Information'
 */

// DELETE
router.delete('/', storeInformationController.delete);

export default router;
