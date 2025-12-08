# Svelte Authentication Frontend

This project is a frontend application built with Svelte and TypeScript that provides a complete user authentication system. It includes features for user registration, login, password reset, and session management with JWT. The application is designed to be a starting point for building secure web applications.

## Table of Contents

* [For Business People](#for-business-people)
  * [Project Overview](#project-overview)
  * [Key Features](#key-features)
  * [Target Audience](#target-audience)
* [For Technical People](#for-technical-people)
  * [Tech Stack](#tech-stack)
  * [Project Structure](#project-structure)
  * [Getting Started](#getting-started)
  * [API Endpoints](#api-endpoints)

## For Business People

### Project Overview

This project provides a ready-to-use frontend for user authentication, which can be easily integrated into any new or existing web application. By handling the complexities of user login, registration, and password management, it allows development teams to focus on core business features, accelerating time-to-market.

### Key Features

* **User Registration:** New users can create an account.
* **User Login:** Registered users can log in to access protected content.
* **Password Reset:** Users can securely reset their password if they forget it.
* **Session Management:** The application uses JSON Web Tokens (JWT) to manage user sessions, ensuring secure and persistent authentication.

### Target Audience

This project is intended for businesses and development teams that need to quickly implement a secure and reliable authentication system for their web applications. It is particularly useful for startups and companies that want to reduce development time and costs.

## For Technical People

### Tech Stack

* **Svelte:** A modern JavaScript compiler that allows you to write easy-to-understand JavaScript code that gets compiled to highly efficient, imperative code that runs in the browser.
* **TypeScript:** A statically typed superset of JavaScript that adds type safety to the project.
* **Rollup:** A module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.
* **Svelte SPA Router:** A lightweight and easy-to-use router for Svelte single-page applications.
* **Axios:** A promise-based HTTP client for the browser and Node.js, used for making API requests.

### Project Structure

```
.
├── public
│   └── build
│       ├── bundle.css
│       └── bundle.js
├── src
│   ├── components
│   │   └── Nav.svelte
│   ├── interceptors
│   │   └── axios.ts
│   ├── pages
│   │   ├── Forgot.svelte
│   │   ├── Home.svelte
│   │   ├── Login.svelte
│   │   ├── Register.svelte
│   │   └── Reset.svelte
│   ├── store
│   │   └── auth.ts
│   ├── App.svelte
│   └── main.ts
├── package.json
├── rollup.config.js
└── tsconfig.json
```

### Getting Started

#### Prerequisites

* Node.js and npm installed on your machine.

#### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd <project-directory>
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

#### Running the Application

* To run the application in development mode with live reloading:
  ```sh
  npm run dev
  ```
* To build the application for production:
  ```sh
  npm run build
  ```
* To start the production server:
  ```sh
  npm run start
  ```

### API Endpoints

The application interacts with a backend API for authentication. The base URL for the API is `http://localhost:8000/api/`.

* `POST /login`: Authenticates a user and returns a JWT.
* `POST /register`: Registers a new user.
* `POST /forgot`: Sends a password reset link to the user's email.
* `POST /reset`: Resets the user's password.
* `GET /user`: Retrieves the currently authenticated user's information.
* `POST /refresh`: Refreshes the JWT to maintain the user's session.
