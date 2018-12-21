const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// http server required for seocket
const http = require ('http');
const server = http.Server(app);

// configure body-parser to read JSON
app.use(bodyParser.json());

const path = require("path");
app.use(express.static(path.join(__dirname + "/static")));

app.set('view engine', 'ejs');

// routes, using routes.js file
require("./config/routes")(app);

server.listen(8000, ()=>{
    console.log("Listening on port 8000")
})

const io = require('socket.io')(server);

var hash = {};
var maxcoord = 49;
var worldmoves = 0;
var chatlog = "";

// initialize mobs
hash[0] = { 'id': 0, 'x': Math.floor(Math.random() * maxcoord), 'y': Math.floor(Math.random() * maxcoord), 'type': -1 }; // orc
hash[1] = { 'id': 1, 'x': Math.floor(Math.random() * maxcoord), 'y': Math.floor(Math.random() * maxcoord), 'type': -2 }; // goblin
hash[2] = { 'id': 2, 'x': Math.floor(Math.random() * maxcoord), 'y': Math.floor(Math.random() * maxcoord), 'type': -3 }; // ogre
hash[3] = { 'id': 3, 'x': Math.floor(Math.random() * maxcoord), 'y': Math.floor(Math.random() * maxcoord), 'type': -1 }; // orc
hash[4] = { 'id': 4, 'x': Math.floor(Math.random() * maxcoord), 'y': Math.floor(Math.random() * maxcoord), 'type': -2 }; // goblin
hash[5] = { 'id': 5, 'x': Math.floor(Math.random() * maxcoord), 'y': Math.floor(Math.random() * maxcoord), 'type': -3 }; // ogre
var mobSize = 6; // number of monsters

function calcMobMove(mob) {
    if ((worldmoves % 2)==0){ // only move every other time so players can catch you
        return;
    }

    dir = Math.floor(Math.random() * 4);

    switch (dir) {
        case 0: // DOWN
            if (mob.y < maxcoord) {
                mob.y++;
            }
            break;
        case 1: // UP
            if (mob.y > 0) {
                mob.y--;
            }
            break;
        case 2: // RIGHT
            if (mob.x < maxcoord) {
                mob.x++;
            }
            break;
        case 3: // LEFT
            if (mob.x > 0) {
                mob.x--;
            }
            break;
    }
    console.log("moved monster ", mob.id);
    console.log("new position: ", mob.x, mob.y);
}

io.on('connection', function (socket) {
    var thisid = socket.id;
    var sockhandle = "";

    //************ Map movement **********************
    socket.emit('pushsocketid', { id: thisid });
    startingX = Math.floor(Math.random() * maxcoord)
    startingY = Math.floor(Math.random() * maxcoord)

    hash[thisid] = { 'id': thisid, 'x': startingX, 'y': startingY };
    console.log("SERVER-SIDE: " + hash)
    io.emit('updategrid', { hash: hash });

    socket.on('playermove', function (data) {
        worldmoves++;
        for (let m=0; m<mobSize; m++){
            calcMobMove(hash[m]);
        }
        hash[thisid] = { 'id': thisid, 'x': data.x, 'y': data.y, 'type': 1 };
        io.emit('updategrid', { hash: hash });
    });

    socket.on('disconnect', function () {
        delete hash[thisid];
    });
    // *************************************************

    // *****************Chat****************************
    socket.on('announceentry', function (data) {
        console.log("announceentry");
        sockhandle = data.handle;
        chatlog = chatlog + "<p>" + data.handle + " has entered the realm."
        io.emit('updatechatlog', { log: chatlog });
    });

    socket.on('newpost', function (data) {
        console.log("newpost");
        chatlog = "<p>" + sockhandle + " says: " + data.msg + "</p>" + chatlog;
        io.emit('updatechatlog', { log: chatlog });
    });

    socket.on('disconnect', function () {
        console.log("disconnect");
        chatlog = chatlog + "<p>" + sockhandle + " has exited the realm.";
        io.emit('updatechatlog', { log: chatlog });
    });
    // ***************************************************
});
