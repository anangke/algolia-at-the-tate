import algoliasearch from "algoliasearch";
import {
  Configure,
  DynamicWidgets,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
} from "react-instantsearch-hooks-web";

import { Hit, Panel, RefinementList } from "./components";
import { INSTANT_SEARCH_INDEX_NAME } from "./constants";

import "./App.css";

const searchClient = algoliasearch(
  "FLDTCJS3H9",
  "650578f7d01a1e8225ab592e1f7d531b",
);

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

export function App(): JSX.Element {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={INSTANT_SEARCH_INDEX_NAME}
      routing={true}
    >
      <Configure ruleContexts={[]} hitsPerPage={12} />
      <div>
        <figure>
          <header className="header">
            <div className="search-bg">
              <h1 className="header-title">
                <a href="/">Algolia @ The Tate</a>
              </h1>
              <div>
                <div className="searchbox-section">
                  <SearchBox
                    placeholder="Search artists and artworks"
                    className="searchbox"
                  />
                  {/* <Autocomplete
                    searchClient={searchClient}
                    placeholder="Search artists and artworks"
                    detachedMediaQuery="none"
                    openOnFocus
                  /> */}
                </div>
              </div>
            </div>
          </header>
          <figcaption>Photo credit: Tate Britain</figcaption>
        </figure>

        <div className="container">
          <div className="search-panel">
            <div className="search-panel__filters">
              <DynamicWidgets>
                <Panel header="Year">
                  <RefinementList
                    attribute="year"
                    searchable={true}
                    searchablePlaceholder="Search year"
                    showMore={true}
                  />
                </Panel>
                <Panel header="Artist">
                  <RefinementList
                    attribute="artist"
                    searchable={true}
                    searchablePlaceholder="Search artist"
                    showMore={true}
                  />
                </Panel>
                <Panel header="Medium">
                  <RefinementList
                    attribute="medium"
                    searchable={true}
                    searchablePlaceholder="Search medium"
                    showMore={true}
                  />
                </Panel>
              </DynamicWidgets>
            </div>
            <div className="search-panel__results">
              <div className="pagination">
                <Pagination />
              </div>
              <Hits hitComponent={Hit} />
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}
export default App;
