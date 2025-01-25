FROM node:16-alpine

WORKDIR /usr/src/app

# Copy package.json and yarn.lock (if using yarn)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of your app's files
COPY . .

# Make sure react-scripts is installed
RUN yarn add react-scripts

# Expose port 3000
EXPOSE 3000

# Set the command to start the app
CMD ["yarn", "dev"]
