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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var autocomplete_js_1 = require("@algolia/autocomplete-js");
var react_1 = require("react");
var client_1 = require("react-dom/client");
function Autocomplete(_a) {
    var searchClient = _a.searchClient, className = _a.className, autocompleteProps = __rest(_a, ["searchClient", "className"]);
    var containerRef = (0, react_1.useRef)(null);
    var panelRootRef = (0, react_1.useRef)(null);
    var rootRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!containerRef.current) {
            return undefined;
        }
        var search = (0, autocomplete_js_1.autocomplete)(__assign({ container: containerRef.current, renderer: { createElement: react_1.createElement, Fragment: react_1.Fragment, render: function () { } }, render: function (_a, root) {
                var _b;
                var children = _a.children;
                if (!panelRootRef.current || rootRef.current !== root) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    rootRef.current = root;
                    (_b = panelRootRef.current) === null || _b === void 0 ? void 0 : _b.unmount();
                    panelRootRef.current = (0, client_1.createRoot)(root);
                }
                panelRootRef.current.render(children);
            } }, autocompleteProps));
        return function () {
            search.destroy();
        };
    }, [autocompleteProps]);
    return (0, jsx_runtime_1.jsx)("div", { ref: containerRef });
}
exports.Autocomplete = Autocomplete;
