# Overlay Module

The Overlay Module is a component of the MERN (MongoDB, Express.js, React, Node.js) stack application that allows dynamic control of overlay content from the server side. It supports the display of a subscription form as an overlay, and also provides a settings form to update the module's settings.

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Tailwind CSS

## Features

- Display a subscription form as an overlay.
- Update settings dynamically from the server side.
- Support for modal or footer slide-in display options.
- Control display frequency based on "once per day" or "once per session" rules.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed locally.
- MongoDB installed and running.

### Installation

1. Clone the repository.

   ```bash
   git clone <repository_url>
   cd task-overlay-client
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Set up MongoDB database and add environment variables.

   - PORT: 3000
   - MONGO_URI: your_mongodb_connection_string

4. Start the server.

   ```bash
   npm run dev
   ```

5. Start the Client.

   ```bash
   cd task-overlay-client
   npm install
   npm run dev
   ```
