
import { Router } from "express";
import { searchDocuments } from "./legal.controller";
 

const router = Router();

router.post("/generate", searchDocuments);

export default router;