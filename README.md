# Auth REST API

This a test REST api that connects to a MongoDB database with set users, for the purpose of testing and developing the Private Market app. Follow the steps below to setup.

## Install packages

Run `yarn` to install packages.

## Setup your environment variables and Local Database

Add a **.env** file to the root folder of your project with the **.env.example** as a reference and fill in information that matches your db settings. Also, ensure you your local db server is running.

## Seed the users data to your database

Run the seeder script with `yarn run seed` to migrate the static users data in `src/data/userData.ts` to your database.

## Start the server

Run `yarn start` to start the server and Enjoy 👌
