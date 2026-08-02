import path from 'path';
import morgan from 'morgan';
import express from 'express';
import session from 'express-session';
import { fileURLToPath } from 'url';
import engine from 'ejs-mate';
import dotenv from 'dotenv';
import flash from 'connect-flash';
import FileStore from 'session-file-store';
import fs from 'fs';

import websiteRoutes from '../website/routes.js';

import { notFoundHandler, viewFlash, viewEnv, viewSession, viewHelpers } from './middlewares.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FileStoreSession = FileStore(session);

dotenv.config();

export default function bootstrap(app) {
  // Logs - solo en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
  }

  // Body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS middleware
  app.use((req, res, next) => {
    const origin = process.env.CORS_ORIGIN || '*';
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // Configuración de sesiones - Adaptada para Vercel
  const sessionPath = process.env.VERCEL 
    ? '/tmp/sessions' 
    : path.join(__dirname, '../../sessions');

  // Crear directorio de sesiones sincrónicamente (sin await)
  if (!process.env.VERCEL && !fs.existsSync(sessionPath)) {
    fs.mkdirSync(sessionPath, { recursive: true });
  }

  app.use(session({
    store: new FileStoreSession({
      path: sessionPath,
      retries: 0,
      ttl: 60 * 60 * 24 // 1 día
    }),
    secret: process.env.SESSION_SECRET || 'secreto-super-seguro-cambiar-en-produccion',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: 'lax'
    }
  }));
  app.use(flash());

  // Middlewares
  app.use(viewFlash);
  app.use(viewEnv);
  app.use(viewSession);
  app.use(viewHelpers);

  // Vistas
  app.engine('ejs', engine);
  app.set('view engine', 'ejs');
  app.set('views', [
    path.join(__dirname, '../website/views'),
  ]);

  // Archivos estáticos - Orden importante para Vercel
  // Primero servir los archivos de React (public/dist)
  app.use('/dist', express.static(path.join(__dirname, '../public/dist')));
  
  // Luego el resto de archivos estáticos (public/)
  app.use(express.static(path.join(__dirname, '../public')));

  // Variables globales
  app.locals.siteTitle = process.env.SITE_TITLE || 'Mi sitio web';
  app.locals.adminEmail = process.env.ADMIN_EMAIL || 'admin@ejemplo.com';

  // Rutas Web
  app.use('/', websiteRoutes);

  // Para SPA de React - Redirigir todas las rutas no encontradas al index.html
  // Esto permite que React Router maneje las rutas en el frontend
  app.get('*', (req, res, next) => {
    // Verificar si es una ruta de API o archivo estático
    if (req.path.startsWith('/api/') || req.path.includes('.')) {
      return next();
    }
    // Servir el index.html de React
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
  });

  // Middleware 404
  app.use(notFoundHandler);
}