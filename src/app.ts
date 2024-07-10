import express, { Application } from 'express';
import routes from './routes/index';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(bodyParser.urlencoded({ extended : true}))

export default app;
