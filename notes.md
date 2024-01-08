Steps we took to build.

1. Start project: Create the app in the current directory. ```npx create-react-app .```
2. Make sure the program can run. ```npm start```
3. Build the app to create the static assets for the project. ```npm run build```
4. Install packages for the server. ```npm i express morgan serve-favicon```
5. Create ```server.js``` file in project root folder.
6. Add middleware code to ```server.js```
  - Requires
    ```
    const express = require('express');
    const path = require('path');
    const favicon = require('serve-favicon');
    const logger = require('morgan');
    ```
  - Middleware
  ```
  const app = express();
  app.use(logger('dev'));
  app.use(express.json());

  // Configure both serve-favicon & static middleware
  // to serve from the production 'build' folder
  app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, 'build')));
  ```
  - Routes
  ```
  // Put API routes here, before the "catch all" route
  // The following "catch all" route (note the *) is necessary
  // to return the index.html on all non-AJAX requests
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  ```
  - Server
  ```
  // Configure to use port 3001 instead of 3000 during
  // development to avoid collision with React's dev server
  const port = process.env.PORT || 3001;

  app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });
  ```
7. Start both the server and client in seperate terminals.
  - Client: ```npm start```
  - Server: ```nodemon server```

8. Add a proxy to the ```package.json``` file.
This will be in the top-level of the document
```
{
  "name": "full_stack_mern_app_practice",
  "version": "0.1.0",
  "private": true,
  "dependencies": {...}
  ...,
  "proxy": "http://localhost:3001"
}
```
Note, whenever a change is made to the ```package.json``` file, restart the server

9. Create your react app with the components and imports you want.
10. Install React Routing ```npm i react-router-dom``` so that we can route pages.

## Making the User Authentication
1. Create the 
```
  config 
  routes
  models
  controllers
```
folders in the root directory.

2. Setup database connection.
  - Install and setup ```dotenv``` with the ```npm i dotenv``` command.
  - Input the code ```require('dotenv').config();``` into the ```server.js``` file near the top.
  - Create a ```.env``` file and add it to the ```.gitignore``` file.
  - Create a file ```database.js``` in the ```/config``` folder.
  - Add the code ```require('./config/database');``` into the server.js file.
  
3. 
