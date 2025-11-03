
import { Router } from "express";
import { getDetailsSummery, getGeneratedSummary } from "./legal.controller";
 
 

const router = Router();

router.get("/search", getGeneratedSummary);
router.get("/:id", getDetailsSummery);

export default router;