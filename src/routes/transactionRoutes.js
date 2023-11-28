import { Router } from "express";
import transactionController from "../controllers/TransactionController";
const router = new Router();

router.post('/transactions', transactionController.createTransaction);

export default router;
