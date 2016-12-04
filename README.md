# Environmap
Environmental web application for the RIT course SWEN-444 "Human Centered Requirements and Design"

## Dependencies
* Node.js (https://nodejs.org/en/, debian package nodejs-legacy)
* NPM (included with Node.js, debian package npm)

## Running a Local Webserver
Run ```npm start```

## Running Environmap in Docker locally at port 8000
```cd docker```
```docker build --tag environmap .```
```docker run docker run -d --volume="/PATH/TO/ENVIRONMAP/REPO/:/environmap:z" -p 127.0.0.1:8000:8000 environmap```

##Direct Navigation
https://chtinahow.github.io/environmap/#/home
