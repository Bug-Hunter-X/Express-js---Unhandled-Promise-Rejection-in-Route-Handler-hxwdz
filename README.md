# Express.js Unhandled Promise Rejection

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in route handlers.  Specifically, the example showcases a scenario where database operations are not correctly handled, leading to crashes when errors occur during fetching data.

## Bug

The provided `bug.js` demonstrates a route handler that fetches user data. It includes error handling to respond with a 404 if the user isn't found. However, it neglects to handle other database errors that can occur.  If the database query fails, a promise rejection is left unhandled, causing the application to crash without a proper response.

## Solution

The `bugSolution.js` illustrates the correct approach to handle potential errors during database operations. It utilizes `try...catch` blocks to gracefully catch database errors and return appropriate error responses to the client, preventing unhandled promise rejections and ensuring robust error handling.

## How to reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to see the unhandled promise rejection.
5. Run `node bugSolution.js` to see the improved error handling.
