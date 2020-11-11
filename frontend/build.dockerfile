FROM node

WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json *.lock ./
RUN yarn

# copy the source code and build
COPY . ./
RUN yarn build