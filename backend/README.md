# Smart Cart- Backend

This folder contains the backend implementation for the Smart_Cart project. The backend is responsible for handling all server-side logic, including API endpoints, database interactions, authentication, and integrations with external services. Below is a comprehensive overview of the structure, functionality, and setup instructions for the backend.

---

## Table of Contents

- [Folder Structure](#folder-structure)
- [Core Features](#core-features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication & Authorization](#authentication--authorization)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Folder Structure

```
backend/
│
├── controllers/    # Route handlers for different API endpoints
├── models/         # Database models and ORM schemas
├── routes/         # Route definitions and API endpoints
├── middleware/     # Custom middleware (auth, validation, error handling)
├── utils/          # Utility functions and helpers
├── config/         # Configuration files (DB, environment)
├── services/       # Business logic and integration services
├── tests/          # Unit and integration tests
├── app.js          # Main application entry point
├── server.js       # Server bootstrap and listen
├── package.json    # NPM dependencies and scripts
├── .env.example    # Environment variable example
└── README.md       # This documentation
```

---

## Core Features

- **RESTful API**: Exposes endpoints for all major Bit-Basket features.
- **User Authentication & Authorization**: Secure login, signup, JWT-based sessions, and role checks.
- **Product & Basket Management**: CRUD operations for products and user baskets.
- **Order Processing**: Endpoints for order creation, status tracking, and history.
- **Database Integration**: Persistent storage and query management.
- **Error Handling**: Centralized error management for consistent API responses.
- **Input Validation**: Middleware to validate request payloads.
- **Logging**: Request logging and error tracking for monitoring.
- **Testing**: Unit and integration tests to ensure reliability.

---

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web framework for API development
- **MongoDB / Mongoose**: Database (or equivalent ORM/database if in use)
- **JWT**: Authentication tokens
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management
- **Jest / Mocha**: Testing frameworks (as applicable)
- **Other**: List any other relevant libraries in `package.json`

---

## Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HriticSunder/MERN-Smart-Cart-CRUD.git
   cd MERN-Ecommerce-CRUD/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   - Copy `.env.example` to `.env` and fill in the required variables.

4. **Start the Server**
   ```bash
   npm start
   ```
   The server should now be running (default: `http://localhost:3000`)

---

## Environment Variables

Edit the `.env` file with your settings. Example:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/bitbasket
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

---

## API Endpoints

Below is a summary of the main endpoints. For detailed request/response formats, see the code in `routes/` and `controllers/`.

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login and receive JWT

### Product Management
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Add a new product (admin only)
- `PUT /api/products/:id` - Update a product (admin only)
- `DELETE /api/products/:id` - Delete a product (admin only)

### Basket
- `GET /api/basket` - Fetch user's basket
- `POST /api/basket` - Add item to basket
- `PUT /api/basket/:itemId` - Update basket item
- `DELETE /api/basket/:itemId` - Remove item from basket

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get user's order history
- `GET /api/orders/:id` - Get details of a particular order

---

## Database Schema

- **User**: Stores authentication info, profile, and roles.
- **Product**: Product details (name, description, price, stock, images).
- **Basket**: User basket items and quantities.
- **Order**: Order details, status, and history.

Database models are defined in the `models/` folder.

---

## Authentication & Authorization

- **JWT-based**: All protected routes require a valid JWT passed in the `Authorization` header.
- **Role-based Access**: Certain routes (e.g., product management) require admin privileges.

---

## Error Handling

All errors are handled centrally with custom middleware in `middleware/errorHandler.js`, returning consistent JSON responses.

---

## Testing

- Automated tests are located in the `tests/` directory.
- To run tests:
  ```bash
  npm test
  ```

---

## Deployment

- Environment variables must be set for deployment (see `.env.example`).
- Use process managers like **PM2** or deployment platforms like **Heroku**, **Vercel**, or **AWS**.
- Ensure CORS and security best practices are properly configured.

---

## Contributing

Contributions are welcome! Please submit pull requests with descriptive messages, and ensure all new features include appropriate tests.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License. See the root `LICENSE` file for details.

---

**For any questions or bug reports, please open an issue or contact the maintainer.**
