FROM gmathieu/node-browsers:3.0.0 AS build
#FROM node:latest

COPY package.json /home/beelogger-admin/
WORKDIR /home/beelogger-admin
RUN npm install
#RUN ng build

COPY ./ /home/beelogger-admin
RUN npm run build
#RUN ng build

FROM nginx:1.15.8-alpine

## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY ./dev/nginx.conf /etc/nginx/nginx.conf

RUN ls -al /usr/
RUN ls -al /

#COPY --from=build  /usr/beelogger-admin/dist/ /usr/share/nginx/html
COPY --from=build  /home/beelogger-admin/dist/ /usr/share/nginx/html
#COPY --from=node /usr/src/app/dist /usr/share/nginx/html

RUN echo "mainFileName=\"\$(ls /usr/share/nginx/html/main*.js)\" && \
          envsubst '\$BACKEND_API_URL \$DEFAULT_LANGUAGE ' < \${mainFileName} > main.tmp && \
          mv main.tmp  \${mainFileName} && nginx -g 'daemon off;'" > run.sh

ENTRYPOINT ["sh", "run.sh"]
