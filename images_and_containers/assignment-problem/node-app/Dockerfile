#image previously installed
FROM node:14
#Working directory where all the content of the container will be saved
WORKDIR /app
#Copy the content to the working directory: 1st argument = where is it getting the files, 2nd argument = inside which working directory inside docker itself will be created
COPY . /app
#Run the image inside the container
RUN npm install
#Port where it will be exposed or displayed, not necesary, but is a good practice to have it
EXPOSE 80
#Command line commands to run the container
CMD [ "node", "server.js" ]