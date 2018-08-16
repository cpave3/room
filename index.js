const app = require('express')();
const http = require('http')(app);
const io = require('socket.io')(http);
const Log = require('sleek-log')
    , log = new Log();

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


http.lsiten(3000, () => {
    log.info('listening on 3000');
});
