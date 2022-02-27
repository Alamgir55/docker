# Specify a base image
FROM node:alpine

# npm ERR! idealTree already exists
WORKDIR /usr/app

# Install some depenendences
COPY ./package.json ./
RUN npm install 
COPY ./ ./

# Default command
CMD ["npm", "start"]
