'use strict';

import {ValidatorsAvatarCacheService} from "./services/sync/validators-avatars";

require('../env');
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { InitServices } from './services/init';
import {ValidatorsInfoService} from "./services/sync/validators-info";

//singleton
const validatorsAvatarCacheService = new ValidatorsAvatarCacheService()

const startServer = async () => {
  const app = express();

  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
  });

  // Init services
  const services = await InitServices(validatorsAvatarCacheService);
  validatorsAvatarCacheService.loop().catch()

  // Init routes
  routes(app, services.dbService, services.syncServices);

  // send errors response
  app.use(function (err, req, res, next) {
    if (err) {
      res.status(err.status || 500).json({ status: err.status, message: err.message });
    } else {
      next();
    }
  });

  // Listen to the App Engine-specified port, or 8080 otherwise
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
};

startServer();
