
import express from "express";
import { initMonnify } from "../controllers/paymentController.js";
const router = express.Router();

router.post('/monnify/init', initMonnify);

export default router;
