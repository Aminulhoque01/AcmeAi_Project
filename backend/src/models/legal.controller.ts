import { Request, Response } from "express";
import { searchLegalDocs, searchLegalDocsId } from "./legal.service";

export const getGeneratedSummary = async (req: Request, res: Response) => {
  try {
    const query = req.query.query as string;

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return res.status(400).json({ error: "Query parameter is required" });
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


export const getDetailsSummery= async(req:Request, res:Response)=>{
  try {
    const id= req.params.id;
    const result = await searchLegalDocsId(id)
    res.json({
      result
    })
  } catch (error) {
     res.status(500).json({ error: "Internal Server Error" });
  }
}