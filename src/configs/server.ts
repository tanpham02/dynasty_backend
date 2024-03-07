import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';

import { errorHandler } from '@app/middlewares/errorHandler';
import { configApp } from '.';

const { FRONT_END_URL } = configApp();

const configServer = (app: Application) => {
  dotenv.config({ path: '.env.development' });
  app.use(
    cors({
      origin: [FRONT_END_URL!, 'http://localhost:1311'],
      optionsSuccessStatus: 200,
    }),
  );

  app.use(express.json()); // JSON OBJECT
  app.use(express.urlencoded({ extended: true })); //FALSE: application/x-www-form-urlencoded | TRUE: combines the 2 above

  app.use(morgan('dev'));
  app.use(cookieParser()); // retries value from cookie

  // GET IMAGE FROM URL
  //         URL                                            folder contain image
  //   app.use(express.static("public"));
  app.use('/public/uploads/image/products', express.static('public/uploads/image/products'));
  app.use('/public/uploads/image/users', express.static('public/uploads/image/users'));
  app.use('/public/uploads/image/customers', express.static('public/uploads/image/customers'));
  app.use('/public/uploads/image/banners', express.static('public/uploads/image/banners'));
  // app.use('/static', express.static(path.join(__dirname, 'public'))) => Đi từ thư mục src vào
  // app.use('/upload/img', express.static('upload/img'));  => Đi từ thu mục root vao

  // GLOBAL ERROR - ERROR HANDLER
  app.use(errorHandler);
};

export default configServer;
