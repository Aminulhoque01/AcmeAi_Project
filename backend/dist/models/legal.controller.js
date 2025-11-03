"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailsSummery = exports.getGeneratedSummary = void 0;
const legal_service_1 = require("./legal.service");
const getGeneratedSummary = async (req, res) => {
    try {
        const query = req.query.query;
        if (!query || typeof query !== "string" || query.trim().length === 0) {
            return res.status(400).json({ error: "Query parameter is required" });
        }
        const results = await (0, legal_service_1.searchLegalDocs)(query);
        res.json({
            query,
            count: results.length,
            results,
            message: "Mock summaries generated from legal documents.",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getGeneratedSummary = getGeneratedSummary;
const getDetailsSummery = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (0, legal_service_1.searchLegalDocsId)(id);
        res.json({
            result
        });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getDetailsSummery = getDetailsSummery;
