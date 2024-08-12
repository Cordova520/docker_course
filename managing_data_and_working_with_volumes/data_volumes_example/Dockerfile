FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 80
#Folder where the files created will persist
# VOLUME [ "/app/feedback" ]

CMD [ "node", "server.js" ]