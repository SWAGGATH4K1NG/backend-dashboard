import { Router , type Request , type Response } from 'express';

const router: Router = Router();

router.get('/users', (req: Request, res: Response) => {
  res.send({ message: 'User routes are working! get all users' });
});

export default router;