# Nodejs-project
 API JSON RESTful
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
