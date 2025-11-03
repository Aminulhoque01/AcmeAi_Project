"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchLegalDocsId = exports.searchLegalDocs = void 0;
const console_1 = require("console");
const legal_model_1 = require("./legal.model");
const searchLegalDocs = async (query) => {
    const q = query.trim();
    const docs = await legal_model_1.LegalModel.find({
        $or: [
            { title: { $regex: q, $options: "i" } },
            { content: { $regex: q, $options: "i" } },
            { tags: { $regex: q, $options: "i" } },
        ],
    }).limit(10);
    const results = docs.map((doc) => {
        const snippetIndex = doc.content.toLowerCase().indexOf(q.toLowerCase());
        const summary = snippetIndex >= 0
            ? doc.content.slice(Math.max(0, snippetIndex - 40), snippetIndex + 200)
            : doc.content.slice(0, 250);
        return {
            id: doc._id,
            title: doc.title,
            jurisdiction: doc.jurisdiction,
            date: doc.date,
            summary: summary + "...",
            tags: doc.tags,
        };
    });
    return results;
};
exports.searchLegalDocs = searchLegalDocs;
const searchLegalDocsId = (id) => {
    const doc = legal_model_1.LegalModel.findById(id);
    if (!doc) {
        throw (0, console_1.error)("dock not found");
    }
    return doc;
};
exports.searchLegalDocsId = searchLegalDocsId;
