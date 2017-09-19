module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('client connected', socket.id);

    socket.on('disconnect', function(data) {
      console.log('client disconnected', socket.id);
    })
    socket.on('canvas_chat', function(data) {
      console.log(data);
      io.emit('canvas_chat', data);
    })

    socket.on('canvas_broadcast', function(data) {
      // socket.join(data.assignId)
      // io.to(data.assingId)
      console.log(data);
      io.emit('canvas_broadcast', data);
    })
  })
}
