"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var os_1 = __importDefault(require("os"));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', function (req, res, next) {
    try {
        res.send('Here to serve!');
    }
    catch (error) {
        next(error);
    }
});
app.get('/api/getUsername', function (req, res) {
    return res.send({ username: os_1.default.userInfo().username });
});
var PORT = 3002;
app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log("App listening on port ".concat(PORT));
});
