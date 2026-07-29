// website/routes.js
import { Router } from 'express';
//import * as webController from './controllers.js';
//import * as apis from './apis.js';
import { requireAuth } from '../configs/middlewares.js';
import { redirectIfAuthenticated } from '../configs/middlewares.js'; 


const router = Router();

router.get('/', (req, res) => {
  return res.render('index', {
    title: 'Crear cuenta',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
});

router.get('/api/v1/test', (req, res) => {
  return res.json({
    success: true,
    message: 'Active session',
    data: ':)'
  });
});

export default router;
