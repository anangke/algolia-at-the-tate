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
exports.Hit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_instantsearch_hooks_web_1 = require("react-instantsearch-hooks-web");
function Hit(_a) {
    var hit = _a.hit;
    //console.log(hit);
    return ((0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsx)("h1", { children: (0, jsx_runtime_1.jsx)(react_instantsearch_hooks_web_1.Highlight, { attribute: "title", hit: hit }) }), hit.thumbnailUrl && ((0, jsx_runtime_1.jsx)("a", __assign({ href: hit.url, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "thumbimg", src: hit.thumbnailUrl, alt: hit.title }) }))), !hit.thumbnailUrl && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "nothumb" }, { children: (0, jsx_runtime_1.jsx)("a", { href: hit.url, target: "_blank" }) }))), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(react_instantsearch_hooks_web_1.Highlight, { attribute: "artist", hit: hit }) })] }));
}
exports.Hit = Hit;
