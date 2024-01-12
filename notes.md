# Steps we took to build.

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


## Making the AJAX Requests
Now we'll be setting up our utilities, services, and APIs so that we can make AJAX requests. This is so that any outgoing and incoming data can be handled by our program. Again, I won't put specifics on how to code, just the general setup.

1. Create the ```config```, ```routes```, ```models```, and ```controllers``` folders in the root directory.
    - The config will be used for configuration files.
    - The routes will be used for outgoing data. (i.e. a POST request containing form data)
    - The models will hold data for the app. 
    - The controllers will handle how incoming and outgoing data should look and be formatted.

2. Initialize database connection.
   - Install ```mongoose``` and ```dotenv```. ```npm i dotenv mongoose```
   - Input the code ```require('dotenv').config();``` into the ```server.js``` file near the top.
   - Create a ```.env``` file and add it to the ```.gitignore``` file.
   - Create a file ```database.js``` in the ```/config``` folder.
   - Add the code ```require('./config/database');``` into the ```server.js``` file to run the code within said file on the server.
   - Add the following code to the ```database.js``` file to connect your app with your database.
      ```
      const mongoose = require('mongoose');
      mongoose.connect(process.env.DATABASE_URL);
      const db = mongoose.connection;
      
      db.on('connected', function () {
        console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
      });
      ```
   - Create an environment variable within the ```.env``` file which will contain your database URL. The code above uses ```DATABASE_URL```, you may change it to whatever you want. Follow the connection instructions on MongoDB. 

3. Setting up AJAX handling.
    - Within the ```/routes``` folder, create another folder called ```api```, which should contain code to handle requests to our API. Example code:
        ```
        const express = require('express');
        const router = express.Router();
        const usersCtrl = require('../../controllers/api/users');

        // POST /api/users
        router.post('/', usersCtrl.create);

        module.exports = router;
        ```
    - Within the ```/controllers``` folder, create another folder called ```api```, which should contain code for controlling/creating/modifying outgoing data. Example code:
        ```
        function create(req, res)
        {
          // Baby step...
          res.json(
          {
            user: 
            {
              name: req.body.name,
              email: req.body.email
            }
          });
        }

        module.exports = { create };
        ```
        
4. Create a ```utilities``` folder within the ```/src``` directory. This will contain code to process our POST requests so that our form components won't have cluttered functionality.
    - API call example code:
        ```
        const BASE_URL = '/api/users';

        export async function signUp(userData) 
        {
          const res = await fetch(BASE_URL, 
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
          });
          
          if (res.ok) { return res.json(); } 
          else { throw new Error('Invalid Sign Up'); }
        }
        ```
    - JWT encoding and ___ example code:
        ```
        Waiting for further progress...
        ``` 

4. Create a form component that can send the data to our api route. This example uses class components for some reason. Don't know why.
    - Example Code:
        ```
        import { signUp } from '../utilities/users-service';

        export class SignUpForm extends Component 
        {
          handleSubmit = async (event) =>
          {
            ...
            const user = await signUp(formData);
          }
          
          render()
          {
            return (
              <form onSubmit={this.handleSubmit}>
                ...
              </form>
            );
          }
        }
        ```
