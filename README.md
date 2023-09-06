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

The backend is based on Supabase (open-source Firebase alternative). Data is stored in posgreSQL tables.

## Frontend

For the frontend, React and React Router are used.

To start the development server, go to `frontend` directory and type `npm run dev`

## Changelog

**2023-09-06**

- [backend] [major change] Express is replaced by Supabase instance in the cloud. This way all data manipulation is saved to the database. Supabase has many services ready to be used out of the box. The next feature I plan to implement is authentication.
- [frontend] Data fetching is changed from Express to Supabase's own solution. Axios is removed from the node packages for now.

**2023-06-09**

- [frontend] Prettier rules applied to the code (also added .prettierrc to the repository)
- [frontend] Inline styles moved to separate css files
- [backend] [bugfix] API documentation was accidentally not updated from Pet Shelter. `api-docs` now shows relevant information for Car Rental API.

**2023-06-01**

- initial release
- [backend] [bugfix] after a car was deleted, it was possible to add a new car with an already existing id number. New id is now calculated as "the highest id plus one" instead of "array length plus one".
