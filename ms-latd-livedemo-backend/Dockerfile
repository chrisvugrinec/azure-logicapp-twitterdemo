FROM cvugrinec/swagger-example:1.0

MAINTAINER chris@datalinks.nl

WORKDIR /opt/ 
COPY api /opt/api/
COPY app.js /opt/
COPY config  /opt/config/
COPY test /opt/test/
COPY package.json /opt/


CMD ["swagger","project","start"]
