// require your server and launch it here
const server = require('./api/server');

const port = process.env.PORT;

server.listen(port, () => {
  console.log("Server started @ localhost:5000")
})