# Car Rental System

## Introduction

This repository is created for learning developing websites in React and working with APIs. By no means does it contain production code.

## Base

The initial release is based on [this tutorial on freecodecamp.org](https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/) by Germán Cocca. It is renamed from "Pet Shelter" to "Car Rental" in every occurance, from displayed text to variable names.

## Features

- Listing cars
- Adding new car
- Modifying existing car
- Deleting car

## Backend

The backend is based on Express. Data is stored in an array of objects. All modifications are reset on reloading the server. There is also an API documentation available in `/api-docs` using Swagger.

To start the server, go to `backend` directory and run `npm start`.

## Frontend

For the frontend, React and React Router are used.

To start the development server, go to `frontend` directory and type `npm run dev`

## Changelog

**2023-06-09**

- [frontend] Prettier rules applied to the code (also added .prettierrc to the repository)
- [frontend] Inline styles moved to separate css files
- [backend] [bugfix] API documentation was accidentally not updated from Pet Shelter. `api-docs` now shows relevant information for Car Rental API.

**2023-06-01**

- initial release
- [backend] [bugfix]: after a car was deleted, it was possible to add a new car with an already existing id number. New id is now calculated as "the highest id plus one" instead of "array length plus one".
