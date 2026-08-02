import express from 'express';
import 'dotenv/config';
import bootstrap from '../configs/bootstrap.js';

// Creamos la app Express
const app = express();

// Aplicamos toda la configuración de bootstrap
bootstrap(app);

// Exportamos la app para Vercel
export default app;