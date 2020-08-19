# Tier 1 Weekend Record Store Project

This week, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using `object literal` syntax.

## Screenshot

![Record Collection](https://tinyurl.com/y6kdmln7)
## Required Features

### Adding records to the collection

- create a variable "collection" that is an empty array
- add a function to your script named `addToCollection(title, artist, year)` that, when called, creates a new record object and pushes it into the "collection" array
- this function should return the newly created record object

### CSS
Time to make our index.html page look cool!

[x] - place the `<h1>` and `<p>` in a header
[x] - add an `<h2>` into the header that says `YOUR NAME's Record Shop`
[x] - create a `stylesheet.css` file and source it into your index.html file.
[x] - look up the CSS `background-image` property to learn how to use the provided `record.png` as the background image on your page with a relative path.
[x] - look up CSS `background-size` to learn how to fill the body of the page.
- Add a background color to the header to make it stand out

## Stretch Goals

### Finding a record by name

[x] - create the function `findRecord(title)`
- this function should receive an argument of a record title
[x] - if this record is found in the "collection" array, return the record's index within the array
[x] - if the record is not found, return `false`

### Get all records by an artist

[x] - create a function called `allBy(artist)`
[x] - when run, this function should return an array of all records in "collection" that are by the given artist

### Flexible search

[x] - create a function called `search(criteria)`
[x] - when run, this function should accept an object of search criteria, and return an array of matching records
    - If there is no object `search()` or an empty object `search({})`, it should return all records
    - If there is an artist property `search({artist: 'Ray Charles'})`, it should return all records by that artist
    - If there is a year property `search({year: 1957})`, it should return all records from that year
    - If there is a year property and an artist property `search({artist: 'Ray Charles', year: 1957})`, it should return all records from that year by that artist


## Super Stretch

### Add record from DOM

>This is a *really* big stretch, but this is where we will be headed soon. This was not covered at all in this week's videos, so it will require a decent amount of additional research.

[x] - Add an `input` for `title`, `artist`, and `year`. Add a `button` that says `Add a Record` to `index.html`
[x] - When a user clicks `Add a Record`, it should be added to the list in JavaScript
- This will take multiple steps in your code before calling your existing `addToCollection` function. 


