# VeggiesShop API

The VeggiesShop API is a robust backend service for the VeggiesShop application, an e-commerce platform designed to sell fresh vegetables online. This API provides endpoints for managing products, handling user authentication, processing orders, and more.

## Features

- **Product Management**: CRUD operations for managing the product catalog.
- **User Authentication**: Secure OTP-based authentication using JWT and Fast2Sms.
- **Order Processing**: Handle order creation, payment integration with PayPal, and order reviews.
- **Wishlist Management**: Allows users to save products for later purchase.
- **Cart Management**: Manage cart items and quantities before checkout.

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose for data modeling
- **Authentication**: JWT for secure user sessions and Fast2Sms for OTP services
- **Payment Integration**: PayPal for processing payments
- **API Requests**: Axios for handling HTTP requests

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/naeemdadi/VeggiesShop-API.git
    ```
2. Navigate to the project directory:
    ```bash
    cd VeggiesShop-API
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your environment variables:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    FAST2SMS_API_KEY=your_fast2sms_api_key
    PAYPAL_CLIENT_ID=your_paypal_client_id
    PAYPAL_CLIENT_SECRET=your_paypal_client_secret
    ```

### Running the Application

To start the application locally, use the following command:
```bash
npm start
```
This will run the app in development mode. Open http://localhost:5000 to view it in the browser.

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login a user and generate an OTP

### Products
- **GET /api/products**: Retrieve all products
- **POST /api/products**: Add a new product (admin only)
- **PUT /api/products/:id**: Update a product (admin only)
- **DELETE /api/products/:id**: Delete a product (admin only)

### Orders
- **POST /api/orders**: Create a new order
- **GET /api/orders/:id**: Retrieve order details

### Wishlist
- **GET /api/wishlist**: Retrieve user's wishlist
- **POST /api/wishlist**: Add a product to wishlist
- **DELETE /api/wishlist/:id**: Remove a product from wishlist

## Deployment

The API can be deployed on various platforms like Heroku, AWS, or any other cloud provider. Ensure you set the necessary environment variables for your deployment setup.

## Contact

For any questions or feedback, please contact Naeem Dadi at [Gmail](mailto:naeemdadi85@gmail.com).
