# Nodejs-project
 API JSON RESTful


### API Endpoints

Below are the available API endpoints in the project:

#### Users

- **GET /users**: Get all users from the database.
- **GET /users/:id**: Get a single user from the database. 
- **POST /users**: Add a new user to the database.
- **PUT /users/:id**: Update an existing user in the database.
- **DELETE /users/:id**: Delete a user from the database.

#### Product

- **GET /products**: Get all products from the database.
- **GET /products/:id** Get a single product from the database.
- **POST /products**: Add a new product to the database.
- **PUT /products/:id**: Update an existing product in the database.
- **DELETE /products/:id**: Delete a product from the database.

#### Orders

- **GET /orders**: Get all orders from the database.
- **GET /orders/:id**: Get a single order from the database.
- **POST /orders**: Add a new order to the database.
- **PUT /orders/:id**: Update an existing order in the database.
- **DELETE /orders/:id**: Delete an order from the database.

#### Filters

- **To filter by date:** GET /orders?startDate=AAAA-MM-GG&endDate=AAAA-MM-GG

### Installation

To install and run the project locally, follow the steps below:

1. Make sure you have Node.js and MongoDB installed on your system.

2. Clone this repository to your computer:

   ```
   git clone https://github.com/Reknan-dev/Nodejs-Project
   ```

3. Navigate to the project directory

4. Install the dependencies:

   ```
   npm install
   ```

5. Database configuration:

   - Create a MongoDB account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster and obtain the database connection string.
   - Paste the connection string into the `server.js` file in the database configuration section.

6. Start the server:

   ```
   npm start
   ```

7. The server will be running at `http://localhost:3000`.




## Connecting Node.js Project to MongoDB Database

### Prerequisites

Before you begin, make sure you have the following:

1. Node.js installed on your machine.
2. MongoDB Atlas account or a locally installed MongoDB server.

### Steps

1. Clone the repository to your local machine.

2. Navigate to the project's root directory.

3. Install the project dependencies by running the following command:

   ```
   npm install
   ```

4. Edit the `.env.example` and call it `.env`. This file will contain your environment variables.

5. Open the `.env` file and edit the following line:

   ```
   DB_CONNECTION_STRING=
   ```

   Replace the empty value after the `=` sign with your MongoDB connection string. If you're using MongoDB Atlas, you can find the connection string in the MongoDB Atlas dashboard. If you're using a locally installed MongoDB server, use the appropriate connection string.

6. Save the `.env` file.

7. Start the Node.js application by running the following command:

   ```
   npm start
   ```

   This command will start the application and establish a connection to the MongoDB database using the connection string you provided.

   You should see a message in the console indicating that the application is connected to the database.

Congratulations! Your Node.js project is now connected to the MongoDB database. You can start building your application and interacting with the database using the MongoDB driver or an Object-Document Mapper (ODM) such as Mongoose.

Please note that the `.env` file containing sensitive information like the database connection string should never be committed to version control. Make sure to add it to your `.gitignore` file to prevent accidental exposure of sensitive data.

For more information on how to interact with MongoDB using Node.js, refer to the MongoDB Node.js driver or Mongoose documentation.