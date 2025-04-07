// routes/analisisRoute.js
import express from 'express';
import { getRingkasanTransaksi } from '../controllers/analisisController.js';

const router = express.Router();

router.get('/ringkasan', getRingkasanTransaksi);

export default router;
