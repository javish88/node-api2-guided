# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step.


##  NOTES 

REST is a generally agreed-upon set of principles and constraints. They are recommendations, not a standard.

When designing a RESTful Web API, keep the following principles in mind:

everything is a resource.

each resource is accessible via a unique URI.

resources can have multiple representations.

communication happens over a stateless protocol (HTTP).

resource management happens via HTTP methods.

By applying the REST architecture to our APIs, we can make them scalable and simpler to 

maintain and extend.


REST APIs have six constraints:

client-server architecture.

stateless architecture: each request should stand on its own, and order should not 

matter. No shared state.

cacheable: improves network performance.

GET, PUT, and DELETE should be idempotent (the same command executed multiple times, 

the state of resources on the server is exactly the same, much like pure functions)

POST is not idempotent.

Caching is a way to store and retrieve data so that future requests can be fulfilled 

faster without repeating expensive calculations or operations.

layered system: component A (a client) might or might not communicate directly with 

component B (the server). There may be other layers between them like logging, caching, 

DNS servers, load balancers, and authentication.

code on demand

The API returns the resource and code to act on it.

The client only needs to know how to execute the code.

Makes the API more flexible, upgradable and extendible.

Most web application, send JavaScript code along with the data.

uniform interfaces

Each resource should be accesible through a single url. Not a hard requirement, but 

recommended.

We should be able to manage the resources through these representations (the URL).

every interaction with the resource should happen through the URL identifier we gave to 

it.

Self-descriptive messages.

HATEOAS (Hyepermedia As The Engine Of Application State). Much like a choose your own 

adventure book, the pages are not read in order. You start at page 1, and based on the 

information available, the reader (client) chooses the action to take, moving them to a 

different page. A good example of a hypermedia API is the GitHub API.


URI stands for uniform resource identifier https://dev.to/flippedcoding/what-is-the-difference-between-a-uri-and-a-url-4455

URL stands for uniform resource locator.


REST resource

https://martinfowler.com/articles/richardsonMaturityModel.html

## Design Process

- Gather rquirements
- list of resources (nouns) [song, user, pets, exercises, routines]
- list of endpoints 

## Endpoints

- avoid using verbs, it's not a URL, it's URI. (instead create-song => /api/songs)
- actions are expressed with http methods
- https://doepud.co.uk/blog/anatomy-of-a-url
- 

## Example

Songs

Properties
- name
- artists
- duration
- year
- recordLabel


- create
- find a song by (filters)
- update
- delete
- paginated list (filters)
- album art

| ACTION                | METHOD             | ENDPOINT
| :-------------------- | :------------------| :----------------------|
| List Songs            |GET                 | /api/songs
| Create a song         |POST                | /api/songs
| Update a Song         |PATCH/PUT           | /api/songs/:id        <----Always use PUT 
| Remove a Song         |DELETE              | /api/songs/:id
| Add Song's Album Art  |POST/PUT            | /api/songs/:id/cover  <----PUT will work better


## CommonJS module system

- import a module using: require();
- export a module using: module.exports

## QUERY STRING
 - [article about a URL]

 
 - begins with a '?'

 - is made up of key=value pairs

 - each key=value pair is seperated by an '&'

 - the query values are accessed 




