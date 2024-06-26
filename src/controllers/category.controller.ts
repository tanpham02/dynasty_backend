/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NextFunction, Request, Response } from 'express';

import { CategoryModel } from '@app/models';
import { CategoryService } from '@app/services';
import { HttpStatusCode, Params } from '@app/types';

const categoryService = new CategoryService(CategoryModel, 'category');

const categoryController = {
  // SEARCH ALL
  searchAll: async (__req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await categoryService.findAll();
      res.status(HttpStatusCode.OK).json(category);
    } catch (error) {
      next(error);
    }
  },

  // SEARCH PAGINATION CATEGORY
  search: async (req: Request, res: Response, next: NextFunction) => {
    const { pageIndex = 0, pageSize = 10, name, sortBy } = req.query;
    const params: Params = {
      name: name?.toString(),
      pageIndex: Number(pageIndex),
      pageSize: Number(pageSize),
      sortBy: sortBy?.toString(),
    };

    try {
      const category = await categoryService.getPagination(params);
      res.status(HttpStatusCode.OK).json(category);
    } catch (error) {
      next(error);
    }
  },

  // CREATE CATEGORY
  createCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await categoryService.createCategory(req);
      res.status(HttpStatusCode.OK).json(category);
    } catch (error) {
      next(error);
    }
  },

  // UPDATE CATEGORY
  updateCategory: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const response = await categoryService.updateCategory(id, req);
      res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
      next(error);
    }
  },

  // GET BY ID CATEGORY
  getCategoryById: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const category = await categoryService.getCategoryById(id);
      res.status(HttpStatusCode.OK).json(category);
    } catch (error) {
      next(error);
    }
  },

  // DELETE CATEGORY
  deleteCategory: async (req: Request, res: Response, next: NextFunction) => {
    const { ids } = req.query;
    try {
      const { message } = await categoryService.deleteCategory(ids);
      res.status(HttpStatusCode.OK).json(message);
    } catch (error) {
      next(error);
    }
  },
};

export default categoryController;
