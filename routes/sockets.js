module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('client connected', socket.id);

    // socket.on('disconnect', function(data) {
    //   console.log('client disconnected', socket.id);
    // })
    //
    // socket.on('hello', function(data) {
    //   console.log(data);
    //   socket.emit('hello', data);
    // })
  })
}
