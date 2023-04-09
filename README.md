# Meme generator

This is a small project created only for testing React by consuming an API and using it to provide some functionality for the user. 

## Description
This project is a web application named Meme Generator. Users can create memes by adding text to an image we get from a thirdy-part service through an API. 

## Stack and tools
* [React](https://reactjs.org/)
* [Figma](https://www.figma.com/)

## Getting Started
Here we teach you how you can get up and running with Meme Generator.

## Prerequisites
- You'll need to have [Node.js](https://nodejs.org/en/) intalled on your machine.
- You'll need to have [Git](https://git-scm.com/) installed installed on your machine.

## Step-by-step
Cloning the app:
- Open a command-line shell (e.g., CMD, Powershell, etc.). Let
- Navigate to the place where you want to place the project in your file system. The way to navigate will depend on the command-line shell you are using, so Google it to find out what you should do.
- Clone this repository using a command like `git clone https://github.com/Quas1Dev/meme-generator.git memegenerator`. In this case, we are setting the name for the folder to where we are cloning our project "memegenerator".
- Navigate to the folder where you cloned the meme generator. 

## Setting up the project

To quickly set up the project and try out our web app, you can download our [setup.bat](https://www.dropbox.com/s/bkvslejpzvp2u2c/setup.bat?dl=0) file. This Batch script will clone the project into a findyourduo folder in your Documents directory, install all dependencies for the web app, server, and mobile app, prepare a PostgreSQL database with the necessary tables, populate them with some data, and initiate the web app and server. 

To use the setup.bat file, simply double click on it and follow the prompts. You'll be asked to enter your PostgreSQL superuser password and the location of your PostgreSQL data directory (default is C:\Program Files\PostgreSQL\15\data). The script will handle the rest. 

We'll provide instructions to run the mobile app in just a moment.

## Getting to use the web app

With both the web app and server running, open any browser you want and navigate to localhost:3000. At this point you should be seing the home page for the application.

## Closing everything and getting back
Once you are done, you can just close all windows opened by the script. All runing process that we started during the setup will be terminated. If you want to run them again, just execute our setup.bat file again.

## Running the mobile app
Navigate to the project's folder using CMD, and then run the follwoing:

To start the server:
```
cd server
npm run dev
```

To start the mobile application:
```
cd ../mobile
npm start
```
Note that a QR code will appear on screen for you.

In your smartphone, open up ExpoGO, and click on Scan QR code. Aim the camera at the QR code, and it should start the connection. Now you can enjoy your React Native app.
