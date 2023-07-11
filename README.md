# Online Issue Ticket Reservation System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Online Issue Ticket Reservation System is a web application that allows users to create, manage, and track tickets for various issues or requests. It consists of a frontend and backend, which are containerized using Docker. The frontend runs on localhost:3000, while the backend runs on localhost:3001.

## Features

- Ticket creation, assignment, and management
- Ticket status tracking


## Prerequisites
Before installing and running the application, make sure you have the following dependencies installed on your system:
- Node.js (v12 or higher)
- Docker (v19 or higher)
- Docker Compose (v1.27 or higher)

## Installation

1. Install frontend and backend dependencies:

## Usage
1. Start the application using Docker Compose: docker-compose up

2. Access the frontend application in your browser at [http://localhost:3000](http://localhost:3000).

3. Access the backend API documentation (Swagger) at [http://localhost:3001/docs](http://localhost:3001/docs).
4. Access the backend application in your browser at [http://localhost:3001](http://localhost:3001).

## API Documentation
The backend provides a comprehensive API documentation using Swagger. You can access the documentation by visiting [http://localhost:3001/docs](http://localhost:3001/docs) in your browser.

Below is a summary of the API endpoints available:

| Endpoint                | Description                                  |
| ----------------------- | -------------------------------------------- |
| GET /tickets            | Get all tickets                              |
| POST /tickets           | Create a new ticket                           |
| PUT /tickets/{id}       | Update a ticket by ID                         |
| DELETE /tickets/{id}    | Delete a ticket by ID                         |













