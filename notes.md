Steps we took to build.

## Initialization
First, we need to set up the program and add a majority of the functions we will use. This program will consist of a server and client portion that will work together.


1. Start project: Create the app in the current directory. ```npx create-react-app .```

2. Make sure the program can run. ```npm start```

3. Build the app to create the static assets for the project. ```npm run build```

4. Install packages for the server. ```npm i express morgan serve-favicon```

5. Create ```server.js``` file in project root folder.

6. Add base middleware code to ```server.js```
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

## Creating the Client Portion
Next, we'll be setting up the client portion of the app. The steps will change based on what you want your app to do. Due to this, I won't explain how to make react components, just the general steps we're taking.

1. Add additional packages if needed to the app.

2. Install React Routing ```npm i react-router-dom``` so that we can route pages.

3. Encapsulate the ```<App>``` component within the  ```<BrowserRouter>``` component in the ```index.js``` file to allow for single-page routing. This can also be done in the ```<App>``` component as well, but this will putting it in ```index.js``` will separate the functionality of each script.


## Making the User Authentication
11. Create the 
    ```config```,
    ```routes```,
    ```models```,
    ```controllers```
    folders in the root directory.

12. Initialize database connection.
    - Install and setup ```dotenv``` with the ```npm i dotenv``` command.
    - Input the code ```require('dotenv').config();``` into the ```server.js``` file near the top.
    - Create a ```.env``` file and add it to the ```.gitignore``` file.
    - Create a file ```database.js``` in the ```/config``` folder.
    - Add the code ```require('./config/database');``` into the server.js file.

13. Next we're setting up our utilities, services, and APIs.

14. Create a form component that can send the data to our api route.

