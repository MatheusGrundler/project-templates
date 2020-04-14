import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'hello World' });
});

export default router;
