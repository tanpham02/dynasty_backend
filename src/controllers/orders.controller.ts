/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NextFunction, Request, Response } from 'express';

import { HttpStatusCode } from '@app/types';
import { OrderModel } from '@app/models';
import OrderService from '@app/services/orders.service';
import { Params } from '@app/types';

const orderService = new OrderService(OrderModel, 'order');

const orderController = {
  // SEARCH PAGINATION
  searchPagination: async (req: Request, res: Response, next: NextFunction) => {
    const { pageIndex, pageSize, customerId, from, to, statusOrder } = req.query;
    const params: Params = {
      pageIndex: pageIndex ? parseInt(pageIndex.toString()) : 0,
      pageSize: pageSize ? parseInt(pageSize.toString()) : 10,
      customerId: customerId?.toString(),
      from: from?.toString(),
      to: to?.toString(),
      statusOrder: statusOrder?.toString(),
    };
    try {
      const order = await orderService.getPaginationOverriding(params);
      res.status(HttpStatusCode.OK).json(order);
    } catch (error) {
      next(error);
    }
  },

  // GET ORDER BY ID
  getById: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const order = await orderService.getOrderById(id);
      return res.status(HttpStatusCode.OK).json(order);
    } catch (error) {
      next(error);
    }
  },

  // CHECKOUT
  checkout: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const responseOrder = await orderService.checkout(req);
      res.status(HttpStatusCode.OK).json(responseOrder);
    } catch (error) {
      next(error);
    }
  },

  // RE-ORDER
  reorder: async (req: Request, res: Response, next: NextFunction) => {
    const { orderId } = req.params;
    const { customerId } = req.query;
    try {
      await orderService.reorder(orderId, customerId?.toString() || '', req);
      res.status(HttpStatusCode.OK).json('Add product in reorder to cart success');
    } catch (error) {
      next(error);
    }
  },

  // UPDATE STATUS ORDER
  updateStatusOrder: async (req: Request, res: Response, next: NextFunction) => {
    const { orderId } = req.params;
    const { statusOrderRequest } = req.query;

    try {
      const { message } = await orderService.updateStatusOrder(
        statusOrderRequest as any,
        orderId?.toString() ?? '',
      );
      res.status(HttpStatusCode.OK).json(message);
    } catch (error) {
      next(error);
    }
  },

  // CANCEL ORDER
  requestCancelOrder: async (req: Request, res: Response, next: NextFunction) => {
    const { orderId } = req.params;
    const { reason } = req.query;
    try {
      const { message } = await orderService.cancelOrder(
        orderId?.toString() || '',
        reason?.toString() || '',
      );
      res.status(HttpStatusCode.OK).json(message);
    } catch (error) {
      next(error);
    }
  },

  // DELETE ORDER
  deleteOrder: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const { message } = await orderService.deleteOne(id?.toString() || '');
      res.status(HttpStatusCode.OK).json(message);
    } catch (error) {
      next(error);
    }
  },
};

export default orderController;