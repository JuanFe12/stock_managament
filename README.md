# stock-management

[![Typescript Badge](https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)](#) [![Nodejs Badge](https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)](#)

> This is a inventory managament for yout bussines, you can add products, add suppliers, add clients and the clients can get debt and you can register, you can get a 360 view of your bussines

### Prerequisites

Sometimes there are libs that are necessary to run the projects

- [Express](https://www.npmjs.com/package/express)
- [In this case we are going to use drizzle orm with mysql](https://orm.drizzle.team/)

### Installing

Run this command to install all the dependencies of the project

```
npm install

```

## For get the sql tables of the project you need to run this commands
NOTE: you have to change the name of the database in the file db/db.ts

This command is for genarte the migration in your repository

```
npm run generate

```

This command is for push the migration in your database and create the tables

```
node --loader ts.node/esm src/db/migrate.ts

```


### Postmand

If you need the collection of postmand for the endpoint, soon we are going to migrate to swagger

### Unit Tests

This are going to set soon


## How To Deploy

this working soon
