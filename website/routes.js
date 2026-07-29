// website/routes.js
import { Router } from 'express';
import * as controller from './controllers.js';
import * as api from './apis.js';
import { requireAuth } from '../configs/middlewares.js';
import { redirectIfAuthenticated } from '../configs/middlewares.js'; 


const router = Router();

router.get('/', controller.home);
router.get('/api/v1/test', api.test);

export default router;
