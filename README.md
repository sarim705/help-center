Help Center API and Client

Project Overview

This project is a full-stack web application that includes both  RESTful API for managing "Help Center" cards and a frontend React application for displaying and searching through these cards. The cards represent different sections of a help center, such as "Branches," "Manage Your Account," and "Manage Billing." The project allows users to create, retrieve, and search through these cards.

Features

Backend (Help Center API)

Create a Card: An API endpoint to add new cards to the help center.

Retrieve All Cards: An API endpoint to fetch all the cards available in the help center.

Retrieve a Specific Card: An API endpoint to fetch details of a specific card by its title.

Error Handling: Comprehensive error handling for missing cards, validation errors, and server issues.

Frontend (Help Center Client)


Search Functionality: A search bar that allows users to filter cards based on the title.

Card Display: Each card is displayed with its id , title and description

Prerequisites

Ensure you have the following installed on your machine:

Node.js: Download and install from Node.js official website.

MongoDB: Download and install from MongoDB official website.

npm or Yarn: Package managers for Node.js.

Getting Started

Backend Setup (Help Center API)

1.Clone the Repository:
First, clone the repository to  local machine:

git clone:https://github.com/sarim705/help-center.git

cd help-center/help-center-api

2.Install Dependencies:

Once inside the help-center-api directory, install the necessary Node.js dependencies using npm:

npm install

This command installs all the packages listed in the package.json file, such as Express.js and Mongoose.


3.Set Up Environment Variables:

Create a .env file in the help-center-api directory with the following content to set up environment variables:

MONGO_URI=mongodb://localhost:27017/helpCenterDB

PORT=5000

Start MongoDB:

Ensure MongoDB is running on your machine. If installed locally, you can start MongoDB using the following command:

mongod

This command should be run in a separate terminal window to keep MongoDB running.

4.Start the Express Server:

Start the server by running:

node server.js


5.Test the API:

You can test if the server is running by visiting http://localhost:5000/ping in your web browser or using a tool like Postman to make a GET request.

To interact with the API endpoints (e.g., creating or retrieving cards), use Postman or cURL.

Frontend Setup (Help Center Client)


1.Navigate to the Client Directory:

cd help-center-client


2.Install Dependencies:

Once inside the help-center-client directory, install the necessary dependencies using npm 

npm install

3.Start the React Application:

Start the frontend React application by running:

npm start

The React application will run on http://localhost:3000.

Open http://localhost:3000 in your web browser to see the Help Center UI.

Error Handling

The API includes error handling for:

404 Not Found: When a specific card cannot be found by title.

500 Internal Server Error: For general server errors.




