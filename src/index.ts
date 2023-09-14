import express, { Express } from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.routes';

const app: Express = express();
dotenv.config();

const PORT: number = Number(process.env.PORT) || 4007;

app.use('/users', usersRoutes);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
