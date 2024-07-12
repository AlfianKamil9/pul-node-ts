import { Router } from 'express';
import { Request, Response } from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
});
router.use('/users', userRoutes);
router.use('/', authRoutes)

export default router;
