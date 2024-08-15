# Customer Details Portal

A single-page application built with React and TypeScript that displays a customer details portal. The portal features a list of customers and shows detailed information and a photo grid upon selecting a customer. The photo grid updates every 10 seconds with new images from Unsplash.

## Features

- **Customer List:** Display a list of customers with their names and titles.
- **Customer Details:** Show detailed information about a selected customer, including a 3x3 photo grid.
- **Dynamic Photo Grid:** The photo grid updates every 10 seconds with new images from Unsplash.

## Technologies Used

- React
- TypeScript
- CSS (for styling)
- Axios (for HTTP requests)

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/yourusername/customer-details-portal.git
cd customer-details-portal
npm install
```

### Set Up Environment Variables

To securely use your Unsplash API client ID, you'll need to set it up as an environment variable.

1. **Create a `.env` file** in the root of the project if it does not already exist.

2. **Add your Unsplash API key** to the `.env` file. Open the `.env` file and add the following line:

   ```plaintext
   REACT_APP_UNSPLASH_CLIENT_ID=your_unsplash_client_id
   ```
