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
exports.ControlledSearchBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function ControlledSearchBox(_a) {
    var inputRef = _a.inputRef, isSearchStalled = _a.isSearchStalled, onChange = _a.onChange, onReset = _a.onReset, onSubmit = _a.onSubmit, placeholder = _a.placeholder, value = _a.value, props = __rest(_a, ["inputRef", "isSearchStalled", "onChange", "onReset", "onSubmit", "placeholder", "value"]);
    function handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (onSubmit) {
            onSubmit(event);
        }
        if (inputRef.current) {
            inputRef.current.blur();
        }
    }
    function handleReset(event) {
        event.preventDefault();
        event.stopPropagation();
        onReset(event);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "ais-SearchBox" }, props, { children: (0, jsx_runtime_1.jsxs)("form", __assign({ action: "", className: "ais-SearchBox-form", noValidate: true, onSubmit: handleSubmit, onReset: handleReset }, { children: [(0, jsx_runtime_1.jsx)("input", { ref: inputRef, className: "ais-SearchBox-input", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", placeholder: placeholder, spellCheck: false, maxLength: 512, type: "search", value: value, onChange: onChange }), (0, jsx_runtime_1.jsx)("button", __assign({ className: "ais-SearchBox-submit", type: "submit", title: "Submit the search query." }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ className: "ais-SearchBox-submitIcon", width: "10", height: "10", viewBox: "0 0 40 40" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z" }) })) })), (0, jsx_runtime_1.jsx)("button", __assign({ className: "ais-SearchBox-reset", type: "reset", title: "Clear the search query.", hidden: value.length === 0 && !isSearchStalled }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ className: "ais-SearchBox-resetIcon", viewBox: "0 0 20 20", width: "10", height: "10" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z" }) })) })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "ais-SearchBox-loadingIndicator", hidden: !isSearchStalled }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ width: "16", height: "16", viewBox: "0 0 38 38", stroke: "#444", className: "ais-SearchBox-loadingIcon" }, { children: (0, jsx_runtime_1.jsx)("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: (0, jsx_runtime_1.jsxs)("g", __assign({ transform: "translate(1 1)", strokeWidth: "2" }, { children: [(0, jsx_runtime_1.jsx)("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: "18" }), (0, jsx_runtime_1.jsx)("path", __assign({ d: "M36 18c0-9.94-8.06-18-18-18" }, { children: (0, jsx_runtime_1.jsx)("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" }) }))] })) })) })) }))] })) })));
}
exports.ControlledSearchBox = ControlledSearchBox;
