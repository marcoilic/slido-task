# slido-task / Events app

## About

Simple single-page application for event administration as an assigment for Slido.

## Used technologies and reasons why

### React

Performance, scalability, component reusability, fast rendering with Virtual DOM and many more.

### Context API

No external libraries, and more straightforward way to handle global state management in React applications, suitable for small/medium projects.

## Prerequisites

1. Git
2. Node - any 12.x version starting with v12.0.0 or greater
3. A clone of the slido-task/Events app repo on your local machine

## Installation

Go into the project root and install npm dependencies.

```bash
cd <folder>
npm install
```

## Running locally

To start server and run application use command:

```bash
npm start
```

App is default running on `http://localhost:3000`.

## Build

To build the project, use command:

```bash
npm run build
```

Build can be found in `build` folder.

## E2E testing

For E2E testing, use command:

```bash
npm run test:e2e
```

Your localhost/server must be running - default: `http://localhost:3000`.
