"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)());
// Middleware
app.use(express_1.default.json());
// Connect to DB
(0, db_1.connectDB)();
// Routes
app.get("/", (req, res) => {
    res.send("🚀 API is running and connected to MongoDB Atlas!");
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map