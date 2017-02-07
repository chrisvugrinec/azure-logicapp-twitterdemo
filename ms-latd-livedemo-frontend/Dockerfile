FROM nginx

MAINTAINER chris@datalinks.nl

WORKDIR /opt/ 

RUN apt-get update
RUN apt-get -y install nodejs-legacy
RUN apt-get -y install npm
RUN npm install express
RUN npm install socket.io
RUN npm install redis
RUN npm install serve-static



COPY src /opt/

CMD ["node","index.js"]
