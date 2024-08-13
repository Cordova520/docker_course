FROM node:14

ARG DEFAULT_PORT=80

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

#Environment variable used for server.js, in this case, the port i will be listening to
ENV PORT $DEFAULT_PORT

EXPOSE $PORT
#Folder where the files created will persist
# VOLUME [ "/app/feedback" ]

CMD [ "node", "server.js" ]