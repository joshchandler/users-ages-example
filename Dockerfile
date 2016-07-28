FROM node:5.11.1

RUN mkdir /var/www
ADD . /var/www
WORKDIR /var/www

RUN npm install

VOLUME /var/www
