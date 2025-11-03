
import { Router } from "express";
import { getGeneratedSummary } from "./legal.controller";
 
 

const router = Router();

router.post("/generate", getGeneratedSummary);

export default router;