FROM node:18-alpine as build

WORKDIR /app

COPY package*.json /app/
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN yarn
COPY . .
RUN yarn build

ENTRYPOINT ["/entrypoint.sh"]

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
