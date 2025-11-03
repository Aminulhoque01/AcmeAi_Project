"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Global error handler
const errorHandler = (err, req, res, next) => {
    console.error("Error: ", err); // Log error details
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: "Bad Request: Invalid JSON" });
    }
    return res.status(500).json({
        message: "Internal Server Error",
        error: err.message || "An unexpected error occurred.",
    });
};
exports.default = errorHandler;
