# Environmap
Environmental web application for the RIT course SWEN-444 "Human Centered Requirements and Design"

## Dependencies
* Node.js (https://nodejs.org/en/, debian package nodejs-legacy)
* NPM (included with Node.js, debian package npm)

## Running a Local Webserver
Run ```npm start```

## Running Environmap in Docker
Run the following command with the following variables defined:

```$ENVIRONMAP_REPO``` - Path to the root of the environmap repository.

```$HOST_IP``` and ```$HOST_PORT``` - The ip address of the network interface and port to serve Environmap on. To run Environmap privately on your computer on port 8000, set ```HOST_IP=127.0.0.1``` and ```HOST_PORT=8000```

``` sh
cd docker
docker build --tag environmap .
docker run docker run -d --volume="$ENVIRONMAP_REPO:/environmap:z" -p $HOST_IP:$HOST_PORT:8000 environmap
```

## Direct Navigation
https://chtinahow.github.io/environmap/app/
