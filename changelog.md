## Changelog

**2023-10-02**

- [backend] [readme] It is now possible to clone this repository and have the site working on your local machine. See [Installation](./installation.md) for more details.

**2023-09-29**

- [frontend] [auth] All routes/actions that need to be protected from non-authenticated users are now protected (`/add`, `/edit`, deleting action)
- [frontend] [design] Basic styling is new implemented throughout the entire site.
- [frontend] [design] [important] Loading animation is now implemented (source: http://loading.io)

**2023-09-28**

- [frontend] [auth] Protected routes are now functional when trying to add new car to the database. Protecting other routes will also be implemented. #todo
- [frontend] [design] Login screen has now some kind of styling. Other pages will come next.

**2023-09-27**

- [frontend] [auth] Login with Google Account is now implemented! It works, however it does throw a few errors in browser's console during the process. Further investigation will be needed. #todo
- [frontend] [design] Minimal design introduced in header with login icon. Other parts of the side also needs a decent basic layout. #todo

**2023-09-22**

- [frontend] [auth] Login and signup is now functional with email+password. Magic link support is removed due to Supabase limit of 4 email/day.
- [frontend] [refactor] React Router's loaders and actions are used on the entire site now. Remained from the previous update, functions of adding new car, editing car and deleting car are now refactored this way.

**2023-09-15**

- [frontend] [refactor] Data fetching is now made via React Router's loader function. This eliminates the need of useState and useEffect in the frontend code. Main page and Car details page work this way now. Other pages still need rewriting. (Done on 2023-09-22)

**2023-09-14**

- [backend] Basic authentication of Supabase is now used. Only read access is granted without signing in. To modify and add cars you need to log in.
- [frontend] [feature] Login page is created, logging in is now possible with magic link sent via email (Supabase feature). After login your email address and a Logout link are shown in the navigation bar.

**2023-09-06**

- [backend] [major change] Express is replaced by Supabase instance in the cloud. This way all data manipulation is saved to the database. Supabase has many services ready to be used out of the box. The next feature I plan to implement is authentication.
- [frontend] Data fetching is changed from Express to Supabase's own solution. Axios is removed from the node packages for now.

**2023-06-09**

- [frontend] Prettier rules applied to the code (also added .prettierrc to the repository).
- [frontend] Inline styles moved to separate css files.
- [backend] [bugfix] API documentation was accidentally not updated from Pet Shelter. `api-docs` now shows relevant information for Car Rental API.

**2023-06-01**

- Initial release based on [this tutorial on freecodecamp.org](https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/) by Germán Cocca.
- [backend] [bugfix] after a car was deleted, it was possible to add a new car with an already existing id number. New id is now calculated as "the highest id plus one" instead of "array length plus one".
