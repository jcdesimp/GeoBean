React Redux Starter Kit
====
Starter kit for A React Redux application

Overview
----
This repo exists to eliminate much of the boilerplate involved in starting a new React/Redux project.

Usage
----
It is assumed that you have NodeJS v6.0+ installed and npm.

When you first clone the repo you will need to do `npm install` to install the dependencies.

To start the development server run `npm run dev`.

Project Structure
----
There are a number of subdirectories within the applixation structure.

- bin/
   - This directory gets created when the app is built. The result ends up in here.
- src/
	- index.ejs
		- EJS template that the root HTML page gets built on top of.
	- index.js
		- Entry point for the JavaScript application
	- js/
		- actions/
			- This directory contains all Redux actions and action creators.
		- components/
			- This directory contains all React components.
	- reducers/
		- All Rexux reducers are defined within here.
	- app.jsx
		- Root React Component that the rest of the components are built on top of.
	- store.js
		- The Redux store.
