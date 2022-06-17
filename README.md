# Algolia @ The Tate

An Express / React / TypeScript application incorporating Algolia Search and and the React Instant Search Hooks API. This application lets a user search across the Tate artworks collection and artists

## Get started

Clone the repository

```
git clone --depth 1 https://github.com/anangke/algolia-at-the-tate.git
```

Change directory

```
cd algolia-at-the-tate
```

Install dependencies

```
npm i
```

Start development server

> Uses TypeScript Compiler CLI with --watch flag to watch for changes

```
npm run build:dev
```

> Uses nodemon to restart node server when there are changes

```
npm run start:dev
```

Build for production

```
npm run build
```

Start production server

```
npm start
```

Open browser and navigate to application

```
http://localhost:3200
```

##Notes

###Data Selection
Found Tate Gallery public data set, split into artists and collection. Thought about federated search across both but decided that there wasn’t much more to be gained from the artists dataset. Sorted and truncated the CSV from 70,000 to 6,000 records, added a “likes” column and populated with a random number to artificially enrich the data for ranking. Then converted to JSON - could have been more but originally reserved room for the artist index too.

###Account creation, App creation and Data Import:
* Created an account, and initially created a sample application to add a demo dataset to try it out
* Created the Tate application to import artwork collection and artist information (limited to 10,000 records - although initially added 10,000 records exactly and exceeded the record limit
* Reduced the data set and Imported data into Tate application using the dashboard instead of the API
* Created indexes Tate-collection for artworks data and Tate-artists for artists data

###Configure relevance:
My chosen dataset probably limited how much I was able to configure or experiment on with regards to relevance. I reasearched documentation and tried to follow the general advice where possible. I also deleted my index a couple of times to enrich it with an additional "like" column with randomly generated data to give me more columns to use when configuring the index. It's clear there's much more capability than I was able to learn or experiment with over a few days, but it looks very powerful and especially with a carefully curated data source to index. Below is a list of steps taken and configurations made to my index

* Added artist and title to search attributes in that order for ranking
* Added likes to custom ranking
* Disabled exact ranking on titles as these contain some “noise”
* Added artists, medium and year to facet filtering
* Added each to facet display
* Set pagination (10 per page - adjust with API)
* Set Highlighting on artist and title
* Reduced some unnecessary returned attributes
* Kept PrefixLast as seemed most sensible for UI/UX with InstantSearch
* Decided against distinct and dedup as artists produce multiple works and some works have very similar titles due to scans being taken from the same source
* Created replica index and basic A/B Test on facet sort across both
* Added “Warhol” rule which pins several hits to the top of the results
* Adding Click Events to app so that Analytics (Insights) can be configured further - but running into some issues with app dev


###Web Application, Stack and Environment
--Setup/configured a boiler plate repo with Express, React and TypeScript with webpack, nodemon, ESlint and Prettier
>IDE: VSCode
--Cloned boilerplate and created a new repo for the assessment [algolia-at-the-tate](https://github.com/anangke/algolia-at-the-tate.git)
--Imported main dependencies (in addition to boiler plate)
* algoliasearch
* react-instantsearch-hooks
* search-insights

###Development
* Bootstrapped a React Instant Search App using the command line tool
* Organised directory structure
* Updated server and client entry points >index.js/tsx
* Configured the main App, registered the search client and built out the basic framework
* Modified the panel component and added additional ones for RefinementList, and Hit (also copied cx.ts and ControlledSearchBox for facet filters from documentation example)
* Added styling to the App.tsx and components - including some responsiveness and adding a placeholder for missing thumbnail images. There is more that I would still need to do on the responsive side and styling in general, but I'm happy with the general layout. I also added in some link urls (to represent conversions) and included alt text and toltip data in places that made sense for useability (and some limited accessibility)
* So far I've been unable to follow the documentation on adding click events to the app with React Instant Search Hooks - I was keen to add this to experiment with Insights and fine tuning relevance, personalisation or trying the A/B Testing but ran into issues with exports from the module and time has prevented me going as far as I'd like

###Summary
I ran into some issues incorpoating InstantSearch Insights and Autocomplete into React/TypeScript - found some difficulties working out types for some props, and would summerise that my typescript knowledge was a bit too limited. So in hindsight I should have kept to JS or similar rather than stretch myself with a less familiar stack. Initial progress was very quick though and can see that you could build a rich UI very quickly. I can also see from reading documentation that I only scratched the surface
```
