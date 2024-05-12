# TRPC + SST + VITE = <3

### How to start

[Install Ion](https://ion.sst.dev/docs/)

    curl -fsSL https://ion.sst.dev/install | bash

[Install pnpm](https://pnpm.io/installation)

    curl -fsSL https://get.pnpm.io/install.sh | sh -

Run the project

    git clone https://github.com/gnllucena/trpc-sst.git

    cd trpc-sst

    pnpm install

    pnpm dev

Deploy to AWS

    sst deploy

### Structure

The project is structured into several directories:

- apps: This directory contains the applications of the project. It includes a server and a web application.

- configuration: This directory contains shared configurations for ESLint, Tailwind CSS, and TypeScript.

### Applications

#### Server

The server application is a TRPC application that serves as the backend for the project. It is located in the apps/server directory. The entry point for the server is apps/server/index.handler.

#### Web

The web application is a front-end application built with Vite and React. It is located in the apps/web directory.

#### Shared Configurations

The shared configurations are located in the configuration directory. They include configurations for ESLint, Tailwind CSS, and TypeScript. These configurations are referenced in the pnpm-lock.yaml file and are used across the applications in the project.
