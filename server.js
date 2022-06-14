import express, { json } from 'express';
import routes from './src/Http/Routes/api.js';

const app = express();
app.use(json());

app.use('/', routes);

export default app;