import express from 'express';
import 'dotenv/config';

import bootstrap from './configs/bootstrap.js';

const app = express();

bootstrap(app);

export default app;