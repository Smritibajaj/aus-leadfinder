<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# API Documentation
# Entity API Documentation

This API allows you to manage business entities/leads in your application.

## Create an Entity

### Request

```http
POST /entities


{
  "ABN": "123456789",
  "ABNStatus": "Active",
  "EntityTypeInd": "Individual",
  "EntityTypeText": "Person",
  "GivenName": "John",
  "FamilyName": "Doe",
  "BusinessAddress": {
    "State": "New York",
    "Postcode": "10001"
  },
  "GST": [
    {
      "status": "Registered",
      "GSTStatusFromDate": "2022-01-01"
    }
  ]
}


GET /entities
GET /entities?page=1&limit=10
GET /entities/{{ABN}}

{
  "message": "Entities fetched successfully",
  "data": [
    {
      "_id": "60fd9bd6b333e018ac2e7aa1",
      "ABN": "123456789",
      "ABNStatus": "Active",
      "EntityTypeInd": "Individual",
      "EntityTypeText": "Person",
      "GivenName": "John",
      "FamilyName": "Doe",
      "BusinessAddress": {
        "State": "New York",
        "Postcode": "10001"
      },
      "GST": [
        {
          "_id": "60fd9bd6b333e018ac2e7aa2",
          "status": "Registered",
          "GSTStatusFromDate": "2022-01-01",
          "__v": 0
        }
      ],
      "__v": 0
    },
    // More entities...
  ]
  pagination: {
     "total": 120,
        "perPage": 10,
        "currentPage": 1,
        "totalPages": 12
  }
}

# Lead API Documentation

This API allows you to manage leads in your application.

## Create a Lead

### Request
http
POST /users

Request Body
json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "company": "ABC Company"
}

## Get all Leads
GET /users
GET /entities?page=1&limit=10



