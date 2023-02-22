# Products-Parser-20230105

Making an abstraction to interact and have in hands data from the [Open Food Facts](https://world.openfoodfacts.org)

## Techs and Frameworks

  - [Nodejs](https://nodejs.org) - Backend Runtime
  - [Fastify](https://fastify.io) - Nodejs server framework, it's Fast!!
  - [Typescript](https://typescriptlang.org) - Superset
  - [Knex](https://knexjs.org) - Query Builder
  - [Zod](https://zod.dev) - Schema Validation
  - [Vitest](https://vitest.dev) - Test framework - 1:1 jest replacement
  - [Docker](https://www.docker.com) - Containers!

## To start clone the repo && install dependencies
```bash
git clone https://github.com/Joabesv/products-parser-20230105.git

cd products-parser-20230105

# if you don't have pnpm you can install it via npm `npm i -g pnpm`

pnpm i
```
- copy the .env.example values to a .env file

- Make sure you have **Docker** installed, then run
```bash
  # Start the container as a background process
  docker-compose up -d
```
- After making sure docker is up and running, run the migrations
```ts
  pnpm knex migrate:latest
```

- Start the server in watch mode with **pnpm start:dev**, and you're good to go!!!


<p>This is a challenge by<a href="https://coodesh.com/"> coodesh</a></p>