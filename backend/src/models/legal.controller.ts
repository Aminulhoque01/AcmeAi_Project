import { Request, Response } from "express";
import { searchLegalDocs } from "./legal.service";

export const getGeneratedSummary = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Query is required" });
    }

    const results = await searchLegalDocs(query);

    res.json({
      query,
      count: results.length,
      results,
      message: "Mock summaries generated from legal documents.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
