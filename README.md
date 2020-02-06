# Wolt restaurant-finder App

A Single Page Application developed using React. The application is packed, configured and bundled using babel and webpack.
It fetches from a locally saved json file of some of Wolt's registered restaurants within Helsinki region - **using fetch API**

## functional Logic

some of the custom logic developed include:

### customized key generator

the json object returned does not contain unique IDs which is required in react. Special logic that
returns random keys for each object is therefore developed.

## _pagination_

for pagination of the returned json objects, pagination logic is construed

## _sorting_

for sorting purposes, the logic employs both **Array.sort()** and **String.prototype.localeCompare()** to sort the returned
results into ascending and descending order

## _overall design_

for styling purposes, the application uses **Block Element Modifier** methodology, that is, **SASS**.

## Installation

1. clone the project to your local drive
2. `npm install`
3. `npm run dev-server`
