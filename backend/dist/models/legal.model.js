"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalModel = void 0;
const mongoose_1 = require("mongoose");
const LegalDocSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    jurisdiction: { type: String, default: "General" },
    date: { type: Date, default: Date.now },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
});
exports.LegalModel = (0, mongoose_1.model)("LegalDoc", LegalDocSchema);
