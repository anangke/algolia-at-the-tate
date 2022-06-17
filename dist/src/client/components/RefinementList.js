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
exports.RefinementList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_instantsearch_hooks_1 = require("react-instantsearch-hooks");
var ControlledSearchBox_1 = require("./ControlledSearchBox");
var cx_1 = require("./cx");
function RefinementList(props) {
    var _a = (0, react_instantsearch_hooks_1.useRefinementList)(props), canToggleShowMore = _a.canToggleShowMore, isFromSearch = _a.isFromSearch, isShowingMore = _a.isShowingMore, items = _a.items, refine = _a.refine, searchForItems = _a.searchForItems, toggleShowMore = _a.toggleShowMore;
    var _b = (0, react_1.useState)(""), query = _b[0], setQuery = _b[1];
    var previousQueryRef = (0, react_1.useRef)(query);
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (previousQueryRef.current !== query) {
            previousQueryRef.current = query;
            searchForItems(query);
        }
    }, [query, searchForItems]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, cx_1.cx)("ais-RefinementList", props.className) }, { children: [props.searchable && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "ais-RefinementList-searchBox" }, { children: (0, jsx_runtime_1.jsx)(ControlledSearchBox_1.ControlledSearchBox, { inputRef: inputRef, placeholder: props.searchablePlaceholder, isSearchStalled: false, onChange: function (event) {
                        setQuery(event.currentTarget.value);
                    }, onReset: function () {
                        setQuery("");
                    }, onSubmit: function () {
                        if (items.length > 0) {
                            refine(items[0].value);
                            setQuery("");
                        }
                    }, value: query }) }))), props.searchable && isFromSearch && items.length === 0 && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "ais-RefinementList-noResults" }, { children: "No results." }))), (0, jsx_runtime_1.jsx)("ul", __assign({ className: "ais-RefinementList-list" }, { children: items.map(function (item) { return ((0, jsx_runtime_1.jsx)("li", __assign({ title: item.value, className: (0, cx_1.cx)("ais-RefinementList-item", item.isRefined && "ais-RefinementList-item--selected") }, { children: (0, jsx_runtime_1.jsxs)("label", __assign({ className: "ais-RefinementList-label" }, { children: [(0, jsx_runtime_1.jsx)("input", { className: "ais-RefinementList-checkbox", type: "checkbox", value: item.value, checked: item.isRefined, onChange: function () {
                                    refine(item.value);
                                    setQuery("");
                                } }), (0, jsx_runtime_1.jsx)("span", { className: "ais-RefinementList-labelText", dangerouslySetInnerHTML: {
                                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                    __html: item.highlighted,
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ className: "ais-RefinementList-count" }, { children: item.count }))] })) }), item.value)); }) })), props.showMore && ((0, jsx_runtime_1.jsx)("button", __assign({ className: (0, cx_1.cx)("ais-RefinementList-showMore", !canToggleShowMore && "ais-RefinementList-showMore--disabled"), disabled: !canToggleShowMore, onClick: toggleShowMore }, { children: isShowingMore ? "Show less" : "Show more" })))] })));
}
exports.RefinementList = RefinementList;
