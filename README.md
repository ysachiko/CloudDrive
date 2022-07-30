# Cloud Disk ☁️

This project was made with MongoDB Express React and NodeJS.
Full-stack application with implementation of login/registration, upload/delete files, make directories and change profile picture.

# MacOS ? git checkout macos : master branch

If you're a MacOS user, you can "checkout macos" branch to download Mac version of the project. Difference between MacOS and Windows version is path to directory.

# Installation

First, change directory to client and run this command. Same for server.

    npm install

Second, you need to make three directories in server.

    mkdir file
    mkdir config
    mkdir static

Add default.json to config directory

    {
        "serverPort" : 5000,
        "dbUrl" : "URL TO MONGODB",
        "secretKey": "YOUR SECRET KEY",
        "filePath": "PATH TO FILE DIRECTORY",
        "staticPath": "PATH TO STATIC"
    }

# How to run
 
For client and server

    npm start

# Enjoy

![DEMO](https://user-images.githubusercontent.com/71353141/181923891-553d68b2-0a5a-4994-a6f8-ee74a4c3bad3.gif)

