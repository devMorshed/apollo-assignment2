# Apollo Assignment 2 - Mongoose Mastery

This repository contains the code for the second assignment of Apollo Next Level Developers, focused on mastering the Mongoose library for interacting with MongoDB databases. 

## Getting Started

### Installation

1. **Clone the Repository:**

   Open your terminal and execute the following command to clone the repository locally:

```
   git clone https://github.com/devMorshed/apollo-assignment2.git
```

2. **Install Dependencies:**

Navigate to the project directory 
```
	cd apollo-assignment2
```

and now install the required dependencies using Yarn:

```
	yarn install
```

## Project Usage

**Environment Variables**

Before starting the server, create a `.env` file in the project's root directory. This file should contain the following environment variables:

- `PORT` (default: 3000): Defines the port number on which the server listens for incoming requests.
- `DB_URL`: Stores the connection string for your MongoDB database (replace `<your_MongoDB_connection_string>` with the actual connection details).

```
PORT=3000
DB_URL=your_db_url
```

**Running the Server**

There are two options for running the server:

**1. Development Mode (Automatic Restart):**

In development mode, the server automatically restarts whenever you make changes to the codebase. This is ideal for rapid development and debugging. Use the following command to start the server in development mode:

```
yarn run start:dev
```


**2. Production Mode (Compiled JavaScript):**

For production deployments, it's recommended to compile the TypeScript codebase into optimized JavaScript for better performance. Here's the process:

a. **Build the Project:**

```
  yarn run build
```

b. **Start the Server:**

Once the build process completes, start the server using the compiled JavaScript file:

  ```
  yarn run start:prod
  ```


## Code Quality Management

This project utilizes ESLint for code linting and style enforcement, ensuring consistent and maintainable code.

- **Check Code Quality:**

    ```
    yarn run lint
    ```

- **Automatic Linting Fixes:**

    ```
    yarn run lint:fix
    ```
    
This command automatically attempts to fix any identified linting issues.

## Available Scripts

The project provides various scripts for development and production workflows:

- `yarn run build`: Compiles TypeScript code into optimized JavaScript.
- `yarn run build:watch`: Continuously compiles TypeScript code in watch mode, ideal for development.
- `yarn run start:prod`: Starts the server using the compiled JavaScript file.
- `yarn run start:dev`: Starts the server in development mode with automatic restarting.
- `yarn run lint`: Runs ESLint for code quality checks.
- `yarn run lint:fix`: Runs ESLint and attempts to automatically fix linting issues.

## Dependencies

This project relies on the following external libraries:

- `cors`: Enables Cross-Origin Resource Sharing (CORS) for secure API interactions.
- `dotenv`: Facilitates loading environment variables from a `.env` file.
- `express`: Provides a lightweight web framework for building APIs and web applications.
- `mongoose`: Offers an object-oriented ODM (Object Data Modeling) library for interacting with MongoDB.
- `zod`: Simplifies data validation and schema definition.

## Development Dependencies

The following additional packages are required for development tasks:

- `@eslint/js`: Core ESLint library for JavaScript code linting.
- `@types/cors`, `@types/express`, `@types/node`: Type definitions for linting and code completion.
- `eslint`: Command-line interface for running ESLint.
- `nodemon`: Monitors code changes and automatically restarts the server in development mode.
- `ts-node-dev`: Enables running TypeScript code directly without manual compilation.
- `typescript`: The core TypeScript compiler used for type checking and transpilation.
- `typescript-eslint`: ESLint plugin for TypeScript linting.

## Author

devMorshed

## License

This project is licensed under the MIT License. For details, refer to the LICENSE file within the repository.