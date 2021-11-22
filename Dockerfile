#step 1 build of react project
FROM imagen-react AS build
WORKDIR /app
COPY package.json ./
RUN	npm install
COPY . .
RUN npm run build

#step 2 CREATE NGINX SERVER
FROM imagen-nginx AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]