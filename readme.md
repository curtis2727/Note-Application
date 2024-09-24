Note Taking App

Overview:

This note-taking application allows users to register, log in, and create/manage notes. Built with Node.js, Express, and MongoDB, it provides a user-friendly interface for organizing notes.


Project Title:

Description: A brief description of what your project does and its main features.

Table of Contents:

Installation
Usage
API Endpoints
Technologies Used
Contributing


Features:

- User registration and authentication
- Create, read, and manage notes
- Secure password storage
- Responsive design


Technologies Used:

Backend: Node.js, Express.js, MongoDB
Frontend: HTML, CSS, JavaScript
Libraries: Mongoose, Bcrypt, CORS

Usage:

*Start your MongoDB server
*Run the application(npm start)
*Access the application: Open your browser and navigate to http://localhost:8001

Example:
*Describe how to use the application, such as how to register or log in.

*Register: Fill out the registration form with your details and submit.
*Login: Enter your username and password to access your account.

API Endpoints:

*Registration
*URL: /api/register
*Method: POST

Register:
  "name": "Curtis R",
  "email": "curtis@gmail.com",
  "phone": "272727",
  "username": "CurtisR",
  "password": "12345"

  Response:
  "message": "User registered successfully!"

  URL: /api/login
Method: POST
Login:
"username": "CurtisR",
  "password": "12345"

  Response:
 "message": "Login successful!"

 Contributing:

Guidelines: If others want to contribute, outline how they can do so.

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
 

