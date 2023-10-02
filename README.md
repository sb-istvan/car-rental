# Car Rental Imagined

## Contents

1. [Description](#introduction)
2. [Installation](./installation.md)
3. [Changelog](./changelog.md) (last updated on 2023-09-29)

## Description

This repository is created for learning developing websites in React and working with APIs. It is a website of an imagined Car Rental. Currently the table of `cars` is implemented. Once all functions work fine, `rentals` table will be added and the site will resemble more of a rental site than a simple car database.

## Features

- Listing cars
- Adding new car
- Modifying existing car
- Deleting car
- User authentication
- Protected routes/actions

## Backend

The backend is based on Supabase (open-source Firebase alternative). Data is stored in postgreSQL tables. User authentication is also resolved.

## Frontend

For the frontend, React and React Router are used with Vite.

## Known issues

- [frontend] [Login.jsx] After logging in coming from a protected route, redirecting back to that protected route does not work. It sends you back to the login page again as if the login procedure did not occur. However, redirecting to any unprotected route works fine.
