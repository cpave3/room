// Requires
const app = require('express')();
const http = require('http')(app);
const io = require('socket.io')(http);
const Log = require('sleek-log')
    , log = new Log();

// Config
const port = process.env.PORT || 3000;

// Return basic page on deault route
app.get('/', (req, res) => {
    res.json(['test']);
});

io.on('connection', socket => {
    log.json({
        message: 'Client connected',
        socket
    });
});


http.lsiten(port, () => {
    log.info(`listening on ${port}`);
});
