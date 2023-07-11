# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port (replace <port> with the actual port your server listens on)
EXPOSE 3001

# Start the server
CMD [ "npm", "start" ]
