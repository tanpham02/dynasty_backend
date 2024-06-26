import axios, { AxiosRequestConfig } from 'axios';
import { NextFunction } from 'express';

class GoogleService {
  async getCustomerInfo(token: string, next: NextFunction) {
    const config: AxiosRequestConfig = {
      method: 'GET',
      baseURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return axios(config)
      .then((res) => res.data)
      .catch((err) => next(err));
  }
}

export default GoogleService;
