# NESTJS-CRUD-WITH-REACTJS

The project is setup as monorepo using yarn workspaces.

There are total 3 packages

- Frontend (ReactJS)

- backend (NestJS based API service)
- shared (shared models and types)

## Setup project locally

To install the dependencies for all packages, run `yarn` in the root directory.

To run all the packages simultanuously run `yarn dev` in the root directory.

Access the backend application at [http://localhost:3001](http://localhost:3001)

Access the frontend application at [http://localhost:3000](http://localhost:3000)

### Install new dependency

To install new dependency under specific package, run `yarn add <dependency> -w <packages>`

### Uninstall dependency

To uninstall a dependency from a specific package, run `yarn remove <dependency> -w <packages>`
