import UserModel from '@app/models/user';
import UserService from '@app/services/user';
import { Params } from '@app/types';
import { Request, Response } from 'express';

const userService = new UserService(UserModel, 'user');

const userController = {
  // SEARCH PAGINATION
  search: async (req: Request, res: Response) => {
    const { pageIndex, pageSize, fullName, role } = req.query;

    try {
      const params: Params = {
        pageIndex: pageIndex ? Number(pageIndex) : 0,
        pageSize: pageSize ? Number(pageSize) : 10,
        fullName: fullName?.toString(),
        role: role?.toString(),
      };
      const voucher = await userService.getPaginationOverriding(params);
      res.status(200).json(voucher);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // CREATE USER
  create: async (req: Request, res: Response) => {
    try {
      const userExist = await UserModel.findOne({
        $or: [{ username: req.body.username }, { phoneNumber: req.body.phoneNumber }],
      });

      if (userExist) {
        return res.status(404).json({ message: 'Username or phoneNumber was existed' });
      }

      const newUser = await userService.createOverriding(req);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // UPDATE USER
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const { message } = await userService.updateOverriding(id, req);
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET USER BY ID
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await userService.getByIdOverriding(id);

      console.log('user', user);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET USER BY ID
  delete: async (req: Request, res: Response) => {
    const { ids } = req.query;
    try {
      const { message } = await userService.delete(ids);
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default userController;
