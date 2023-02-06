#!/usr/bin/env node

const app = require('../app');
const http = require('http');
const { debug } = require('console');


// Normalize a port into a number, string, or false
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

// create server
const server = http.createServer(app)

//server starts listening
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


// create http server
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port))
        return val;
    if(port >= 0)
        return port;
    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
}