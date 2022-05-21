# We want to use nodejs as a base
FROM node:14

# Special directory we want to use
WORKDIR /app

# Copy our package.json file into working directory
COPY package.json .

# We want to run script to download all out dependencies
RUN npm install

# Copy the rest of our code inside our package
COPY . .

# Expose port # to outside world
EXPOSE 3000

# Execute node app.mjs
CMD [ "node", "app.mjs" ]