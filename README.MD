# Apollo Assignment 2

This repository contains the assignment for Apollo Next Level Developers' second assignment, focused on mastering Mongoose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Author](#author)
- [License](#license)

## Installation

Follow the steps below to clone the repository and install the necessary dependencies:

1. **Clone the repository**

   Open your terminal and execute the following command to clone the repository:

   ```bash
   git clone https://github.com/devMorshed/apollo-assignment2.git
   ```

2. **Navigate to the project directory**

   Change to the project directory by running:

   ```bash
   cd apollo-assignment2
   ```

3. **Install dependencies**

   Install the project dependencies using Yarn:

   ```bash
   yarn install
   ```

## Usage

To run the project, you can use one of the following scripts:

1. **Start the server in production mode**

   This command will run the compiled JavaScript file located at `./dist/server.js`:

   ```bash
   yarn run start:prod
   ```

2. **Start the server in development mode**

   This command will use `ts-node-dev` to run the server from the TypeScript source files and will automatically restart the server on file changes:

   ```bash
   yarn run start:dev
   ```

3. **Lint the project**

   This command will run ESLint to check for code quality and style issues:

   ```bash
   yarn run lint
   ```

4. **Fix linting issues**

   This command will run ESLint and automatically fix any fixable issues:

   ```bash
   yarn run lint:fix
   ```

## Scripts

- **`yarn run build:watch`**: It will execute the `tsc -w` which will build the typescript to javascript on the run which can be use in the development environment also to build and run js from the `dist/` folder.
- **`yarn run start:prod`**: Runs the compiled server (`./dist/server.js`).
- **`yarn run start:dev`**: Runs the server in development mode using `ts-node-dev`.
- **`yarn run lint`**: Runs ESLint to check for code quality issues.
- **`yarn run lint:fix`**: Runs ESLint and automatically fixes any issues.

## Dependencies

| Dependency | Version |
| ---------- | ------- |
| `cors`     | ^2.8.5  |
| `dotenv`   | ^16.4.5 |
| `express`  | ^4.19.2 |
| `mongoose` | ^8.4.0  |
| `zod`      | ^3.23.8 |

### Development Dependencies

| Dependency          | Version   |
| ------------------- | --------- |
| `@eslint/js`        | ^9.3.0    |
| `@types/cors`       | ^2.8.17   |
| `@types/express`    | ^4.17.21  |
| `@types/node`       | ^20.12.12 |
| `eslint`            | ^8.57.0   |
| `nodemon`           | ^3.1.0    |
| `ts-node-dev`       | ^2.0.0    |
| `typescript`        | ^5.4.5    |
| `typescript-eslint` | ^7.9.0    |

## Author

**devMorshed**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
