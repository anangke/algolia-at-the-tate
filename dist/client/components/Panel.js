"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function Panel(_a) {
    var header = _a.header, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "ais-Panel" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "ais-Panel-header" }, { children: (0, jsx_runtime_1.jsx)("span", { children: header }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ais-Panel-body" }, { children: children }))] })));
}
exports.Panel = Panel;