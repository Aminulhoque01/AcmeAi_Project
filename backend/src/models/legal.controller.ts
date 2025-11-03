

import { Request, Response } from "express";
import { getMockResults } from "./legal.service";
 

export const searchDocuments = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query required" });
    const results = await getMockResults(query);
    res.json({ results });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
