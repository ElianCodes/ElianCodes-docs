---
sidebar_position: 2
sidebar_label: MostVisitedPages
---

# @elianvancutsem/mostvisitedpages

an NPM Package based on the Google Analytics Data API to fetch your x most frequent visited pages from Google Analytics.

Both TypeScript and ESModules are supported

## Installation

```bash
npm i @elianvancutsem/mostvisitedpages
```

## Using `@elianvancutsem/mostvisitedpages`

The MostVisitedPages constructor takes in two parameters: `credentials` and `propertyId`.

### `credentials`

Credentials has two variables; `client_email` and `private_key`. Both of these can be created by creating a JSON Service Account.

Follow [the Official Google Analytics Data API documentation](<https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries>) for more information about how to do this.

### `propertyId`

The PropertyId is the PropertyID of the Google analytics property.

NOTE: the Service account should be added with `read & analyze` access to the property.

### Example

```js
import { MostVisitedPages } from "@elianvancutsem/mostvisitedpages";

const testEmail = "xxx"
const testKey = "xxx"

const mostVisitedPages = new MostVisitedPages({client_email: testEmail, private_key: testKey}, 'xxxxxxxx')
```

## Functions

### `getPageViews(limit?: number)`

Function that returns an array of the x most viewed pages in the last 90 days according to Google Analytics.

This function returns an array of the `Page` type (which can be imported from `@elianvancutsem/mostvisitedpages`)

The `limit` parameter provides a limit to the number of pages returned, will default to `10` if none is set.

### `getPageViewsSince(startDate: string, limit?: number)`

Works like `getPageViews()` but with a required `startDate`.

The `startDate` parameter can be a date like `2021-10-01` (YYYY-MM-DD) or can be a sring like `NdaysAgo` or `yesterday`. It will **default to the past 90 days if none is provided**.

### `getAllPageViewsSince(startDate: string)`

Works like `getPageViewsSince()` but without a limit on pages.

### `getActiveUsers(limit?: number)`

works like `getPageViews()`, but returns the active users instead of the views.

### `getActiveUsersSince(startDate: string, limit?: number)`

works like `getPageViewsSince()`, but returns the active users instead of the views.

## Types

types can be imported from `@elianvancutsem/mostvisitedpages` like the following:

```js
import { Page } from '@elianvancutsem/mostvisitedpages';
```

### Page

```ts
{
    title: string
    url: string
    views?: number
    users?: number
}
```

### Credentials

```ts
{
    client_email: string
    private_key: string
}
```

## Full Example

```js
import { MostVisitedPages } from "@elianvancutsem/mostvisitedpages";

const testEmail = "xxx"
const testKey = "xxx"

const mostVisitedPages = new MostVisitedPages({client_email: testEmail, private_key: testKey}, 'xxxxxxxx')

const getReport = async () => {
    console.log(await mostVisitedPages.getPageViewsSince('yesterday', 4));
}

getReport();
```

## Links

- [Github Repository](<https://github.com/ElianVanCutsem/MostVisitedPages>)
- [NPM package](<https://npmjs.com>)
- [Google Analytics Data API](<https://developers.google.com/analytics/devguides/reporting/data/v1>)
