"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const socket_1 = __importDefault(require("./service/socket"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
const clientPath = (0, path_1.join)(__dirname, "./client/");
app.use(express_1.default.static(clientPath));
app.get('/api/hello', (req, res) => {
    res.json({ 'hello': 'world!' });
});
app.get('*', (req, res) => {
    res.sendFile((0, path_1.resolve)(clientPath, 'index.html'));
});
const server = app.listen(port, () => {
    console.log(`Server listening is http://localhost:${port}`);
});
new socket_1.default(server);
module.exports = app;
