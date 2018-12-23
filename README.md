# tello-drone-control
This project contains two parts. The first is a node server hosting a socket.io connection. 
While the second is a Vue based web frontend to communicate with the server.

## Frontend
All commands for the frontend should be run from the project root directory.

### Project setup
```
npm install
```

### Compiles and hot-reloads frontend for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## Server
All commands for the backend should from the `/server` subdirectory.

### Setup
```
npm install
```

### Starting the server
```
npm start
```

### Troubleshooting
- Make sure your computer is connected to the Tello drone's wifi directly.
- Restart the server by typing `rs` and hitting enter in the terminal running the `npm start` job

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Attributions
Web control idea taken from @WesBos: https://github.com/wesbos/javascript-drones
