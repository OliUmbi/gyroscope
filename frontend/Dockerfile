FROM nginx AS frontend
WORKDIR /frontend
COPY /dist /frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
