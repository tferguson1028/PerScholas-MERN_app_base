# How this app is working with MERN stack

## 1. Forms:
We're getting information from the forms and setting it to a state. 
After that, We are passing the data to something that can handle it, the <b>services</b>.

The only functionality a form has is:
- Handle change
- Handle submit

After that this info is sent to the <b>services</b>.

## 2. Services
Grabs the data and runs it through functions that help persist the data. 
The services parse data and runs the necessary parts through functions from the <b>API</b>. 

## 3. API
Sends requests to the server through its <b>routes</b>.


## 4. Routes
Sends requests to the <b>controller</b>.
Acts as a go between for the client and server, the API and controller.
Determines which controller the data needs to go to and sends it to the appropriate destination.

Also tells the controller what kind of data it sending to it via the methods (GET, POST, PUT, DELETE)
- GET: The user wants to get back data from the server.
- POST: The user wants to send data to the server and potentially receive data based on what they sent.
- PUT: The user wants to modify data on the server.
- DELETE: The user wants to remove data on the server.

## 5. Controllers
Authenticates, validates and uses the data given to determine what the application should do
with the data it received. 

## 6. Model
Determines what the data should look like and how it relates to the rest of the application.
If the data does not look like the model, the app cannot work with it.
