<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Project logo"></a>
</p>

<h3 align="center">NodeJS Back-end</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/r4rajat/nodejs-backend)](https://github.com/r4rajat/nodejs-backend/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/r4rajat/nodejs-backend.svg)](https://github.com/r4rajat/nodejs-backend/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [API Testing](#api_tests)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Backend for a sample E-Commerce Website developed using NodeJS, Express and MongoDB.
Following functionalities are available for use.

- Sign-up a new user
- Login with email and password
- Logout from portal

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

- [NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [MongoDB](https://docs.mongodb.com/manual/installation/)


### Installing

A step by step series of examples that tell you how to get a development env running.

Install Dependencies

```
npm install
```

Create an .env File holding Environment Variables in the Project Root 

```
DATABASE=<Address String of your MongoDB Instance> [Required]
PORT=<Port on which you want your application to run. Default = 8000> [Optional]
SECRET=<Secret for encryption and decryption of Authentication Tokens> [Required]
```

Run app.js
```
npm start
```
## 🔧 API testing <a name = "api_tests"></a>

### Documentation of further Testing of various API(s)

- #### Authentication

Sign Up
```
Endpoint: /api/signup
Request Type: POST
Body: {
        "firstName": "Abc",             [Required]
        "lastName": "Xyz",              [Optional]
        "userInfo": "Description",      [Optional]
        "email": "abc@xyz.com",         [Required]
        "password": "B#A*jhv8"          [Required]
        "role": 1                       [Optional]
      }
```

Login
```
Endpoint: /api/login
Request Type: POST
Body: {
        "email": "abc@xyz.com",         [Required]
        "password": "B#A*jhv8"          [Required]
      }
```

Logout
```
Endpoint: /api/logout
Request Type: GET
```

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [Rajat Gupta](https://github.com/r4rajat)

