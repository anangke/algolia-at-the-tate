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
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_instantsearch_hooks_1 = require("react-instantsearch-hooks");
var autocomplete_js_1 = require("@algolia/autocomplete-js");
var autocomplete_plugin_recent_searches_1 = require("@algolia/autocomplete-plugin-recent-searches");
var autocomplete_plugin_query_suggestions_1 = require("@algolia/autocomplete-plugin-query-suggestions");
var autocomplete_shared_1 = require("@algolia/autocomplete-shared");
var constants_1 = require("../constants");
require("@algolia/autocomplete-theme-classic");
function Autocomplete(_a) {
    var searchClient = _a.searchClient, className = _a.className, autocompleteProps = __rest(_a, ["searchClient", "className"]);
    var autocompleteContainer = (0, react_1.useRef)(null);
    var _b = (0, react_instantsearch_hooks_1.useSearchBox)(), query = _b.query, setQuery = _b.refine;
    var _c = (0, react_instantsearch_hooks_1.useHierarchicalMenu)({
        attributes: constants_1.INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES
    }), categories = _c.items, setCategory = _c.refine;
    var setPage = (0, react_instantsearch_hooks_1.usePagination)().refine;
    var _d = (0, react_1.useState)({ query: query }), instantSearchUiState = _d[0], setInstantSearchUiState = _d[1];
    var debouncedSetInstantSearchUiState = (0, autocomplete_shared_1.debounce)(setInstantSearchUiState, 500);
    (0, react_1.useEffect)(function () {
        setQuery(instantSearchUiState.query);
        instantSearchUiState.category && setCategory(instantSearchUiState.category);
        setPage(0);
    }, [instantSearchUiState]);
    var currentCategory = (0, react_1.useMemo)(function () { var _a; return (_a = categories.find(function (_a) {
        var isRefined = _a.isRefined;
        return isRefined;
    })) === null || _a === void 0 ? void 0 : _a.value; }, [categories]);
    var plugins = (0, react_1.useMemo)(function () {
        var recentSearches = (0, autocomplete_plugin_recent_searches_1.createLocalStorageRecentSearchesPlugin)({
            key: 'instantsearch',
            limit: 3,
            transformSource: function (_a) {
                var source = _a.source;
                return __assign(__assign({}, source), { onSelect: function (_a) {
                        var item = _a.item;
                        setInstantSearchUiState({
                            query: item.label,
                            category: item.category
                        });
                    } });
            }
        });
        var querySuggestionsInCategory = (0, autocomplete_plugin_query_suggestions_1.createQuerySuggestionsPlugin)({
            searchClient: searchClient,
            indexName: constants_1.INSTANT_SEARCH_QUERY_SUGGESTIONS,
            getSearchParams: function () {
                // eslint-disable-next-line  @typescript-eslint/non-null-assertion
                return recentSearches.data.getAlgoliaSearchParams({
                    hitsPerPage: 3,
                    facetFilters: [
                        "".concat(constants_1.INSTANT_SEARCH_INDEX_NAME, ".facets.exact_matches.").concat(constants_1.INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0], ".value:").concat(currentCategory),
                    ],
                });
            },
            transformSource: function (_a) {
                var source = _a.source;
                return __assign(__assign({}, source), { sourceId: 'querySuggestionsInCategoryPlugin', onSelect: function (_a) {
                        var item = _a.item;
                        setInstantSearchUiState({
                            query: item.query,
                            category: item.__autocomplete_qsCategory
                        });
                    }, getItems: function (params) {
                        if (!currentCategory) {
                            return [];
                        }
                        return source.getItems(params);
                    }, templates: __assign(__assign({}, source.templates), { header: function (_a) {
                            var items = _a.items;
                            if (items.length === 0) {
                                return (0, jsx_runtime_1.jsx)(react_1.Fragment, {});
                            }
                            return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("span", __assign({ className: "aa-SourceHeaderTitle" }, { children: ["In ", currentCategory] })), (0, jsx_runtime_1.jsx)("span", { className: "aa-SourceHeaderLine" })] }));
                        } }) });
            }
        });
        var querySuggestions = (0, autocomplete_plugin_query_suggestions_1.createQuerySuggestionsPlugin)({
            searchClient: searchClient,
            indexName: constants_1.INSTANT_SEARCH_QUERY_SUGGESTIONS,
            getSearchParams: function () {
                // eslint-disable-next-line  @typescript-eslint/non-null-assertion
                if (!currentCategory) {
                    return recentSearches.data.getAlgoliaSearchParams({
                        hitsPerPage: 6,
                    });
                }
                return recentSearches.data.getAlgoliaSearchParams({
                    hitsPerPage: 3,
                    facetFilters: [
                        "".concat(constants_1.INSTANT_SEARCH_INDEX_NAME, ".facets.exact_matches.").concat(constants_1.INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0], ".value:-").concat(currentCategory),
                    ],
                });
            },
            categoryAttribute: [
                constants_1.INSTANT_SEARCH_INDEX_NAME,
                'facets',
                'exact_matches',
                constants_1.INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0]
            ],
            transformSource: function (_a) {
                var source = _a.source;
                return __assign(__assign({}, source), { sourceId: 'querySuggestionsPlugin', onSelect: function (_a) {
                        var item = _a.item;
                        setInstantSearchUiState({
                            query: item.query,
                            category: item.__autocomplete_qsCategory || ''
                        });
                    }, getItems: function (params) {
                        if (!params.state.query) {
                            return [];
                        }
                        return source.getItems(params);
                    }, templates: __assign(__assign({}, source.templates), { header: function (_a) {
                            var items = _a.items;
                            if (!currentCategory || items.length === 0) {
                                return (0, jsx_runtime_1.jsx)(react_1.Fragment, {});
                            }
                            return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "aa-SourceHeaderTitle" }, { children: "In other categories" })), (0, jsx_runtime_1.jsx)("span", { className: "aa-SourceHeaderLine" })] }));
                        } }) });
            }
        });
        return [recentSearches, querySuggestionsInCategory, querySuggestions];
    }, [currentCategory]);
    (0, react_1.useEffect)(function () {
        if (!autocompleteContainer.current) {
            return;
        }
        var autocompleteInstance = (0, autocomplete_js_1.autocomplete)(__assign(__assign({}, autocompleteProps), { container: autocompleteContainer.current, initialState: { query: query }, plugins: plugins, onReset: function () {
                setInstantSearchUiState({ query: '', category: currentCategory });
            }, onSubmit: function (_a) {
                var state = _a.state;
                setInstantSearchUiState({ query: state.query });
            }, onStateChange: function (_a) {
                var prevState = _a.prevState, state = _a.state;
                if (prevState.query !== state.query) {
                    debouncedSetInstantSearchUiState({
                        query: state.query
                    });
                }
            }, renderer: { createElement: react_1.createElement, Fragment: react_1.Fragment, render: react_dom_1.render } }));
        return function () { return autocompleteInstance.destroy(); };
    }, [plugins]);
    return (0, jsx_runtime_1.jsx)("div", { className: className, ref: autocompleteContainer });
}
exports.Autocomplete = Autocomplete;
