import { Router } from 'express';

const router = Router();

router.get('/playgarden', (req, res) => {
  res.render('expirimentjes.liquid');
});

export default router;
