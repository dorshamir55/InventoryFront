# Stage 1
FROM node:10-alpine as build-step
RUN yarn -v
RUN mkdir -p /app
WORKDIR /app
# COPY package.json /app 
COPY package.json yarn.lock ./
RUN yarn
COPY . /app
RUN yarn run build --prod
# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/angular-fronted/ /usr/share/nginx/html