"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const legal_controller_1 = require("./legal.controller");
const router = (0, express_1.Router)();
router.get("/search", legal_controller_1.getGeneratedSummary);
router.get("/:id", legal_controller_1.getDetailsSummery);
exports.default = router;
