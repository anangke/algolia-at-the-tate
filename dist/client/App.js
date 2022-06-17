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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var algoliasearch_1 = __importDefault(require("algoliasearch"));
/* import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares';
import {
  useInstantSearch,
  UseInstantSearchProps
} from '../../node_modules/react-instantsearch-hooks/dist/es/lib/useInstantSearch';
//import { useInstantSearch } from 'react-instantsearch-hooks-web'
import { useLayoutEffect } from 'react'; */
var react_instantsearch_hooks_web_1 = require("react-instantsearch-hooks-web");
var components_1 = require("./components");
var constants_1 = require("./constants");
require("./App.css");
var searchClient = (0, algoliasearch_1.default)('FLDTCJS3H9', '650578f7d01a1e8225ab592e1f7d531b');
/*function InsightsMiddleware() {
    const { use } = useInstantSearch<UseInstantSearchProps>( )

    useLayoutEffect(() => {
        const middleware = createInsightsMiddleware({
            insightsClient: aa,
        })

        return use(middleware)
    }, [use])

    return null
}*/
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_instantsearch_hooks_web_1.InstantSearch, __assign({ searchClient: searchClient, indexName: constants_1.INSTANT_SEARCH_INDEX_NAME, routing: true }, { children: [(0, jsx_runtime_1.jsx)(react_instantsearch_hooks_web_1.Configure, { ruleContexts: [], hitsPerPage: 12 }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("figure", { children: [(0, jsx_runtime_1.jsx)("header", __assign({ className: "header" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "search-bg" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "header-title" }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "/" }, { children: "Algolia @ The Tate" })) })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "searchbox-section" }, { children: (0, jsx_runtime_1.jsx)(components_1.Autocomplete, { searchClient: searchClient, placeholder: "Search artists and artworks", detachedMediaQuery: "none", openOnFocus: true }) })) })] })) })), (0, jsx_runtime_1.jsx)("figcaption", { children: "Photo credit: Tate Britain" })] }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "container" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "search-panel" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "search-panel__filters" }, { children: (0, jsx_runtime_1.jsxs)(react_instantsearch_hooks_web_1.DynamicWidgets, { children: [(0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ header: "Year" }, { children: (0, jsx_runtime_1.jsx)(components_1.RefinementList, { attribute: "year", searchable: true, searchablePlaceholder: "Search year", showMore: true }) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ header: "Artist" }, { children: (0, jsx_runtime_1.jsx)(components_1.RefinementList, { attribute: "artist", searchable: true, searchablePlaceholder: "Search artist", showMore: true }) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ header: "Medium" }, { children: (0, jsx_runtime_1.jsx)(components_1.RefinementList, { attribute: "medium", searchable: true, searchablePlaceholder: "Search medium", showMore: true }) }))] }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "search-panel__results" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "pagination" }, { children: (0, jsx_runtime_1.jsx)(react_instantsearch_hooks_web_1.Pagination, {}) })), (0, jsx_runtime_1.jsx)(react_instantsearch_hooks_web_1.Hits, { hitComponent: components_1.Hit }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "pagination" }, { children: (0, jsx_runtime_1.jsx)(react_instantsearch_hooks_web_1.Pagination, {}) }))] }))] })) }))] })] })));
}
exports.App = App;
exports.default = App;
