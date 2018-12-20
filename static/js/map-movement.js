var socketid = "";
var selfx;
var selfy;
const gridSize = 50;
var viewportstart = {};

function resetGrid() {
    for (x = 0; x < gridSize - 1; x++) {
        for (y = 0; y < gridSize - 1; y++) {
            $(".div-" + x + "-" + y).css('background', 'white');
        }
    }
}

function drawViewport(old, newv ) {
    // draw new viewport on world map
    for (let x = newv.x; x < newv.x + 10; x++) {
        $(".div-" + x + "-" + newv.y).addClass('view-t');
        $(".div-" + x + "-" + (newv.y + 9)).addClass('view-b');
    }
    for (let y = newv.y; y < newv.y + 10; y++) {
        $(".div-" + newv.x + "-" + y).addClass('view-l');
        $(".div-" + (newv.x + 9) + "-" + y).addClass('view-r');
    }
    // remove old viewport from world map
    for (let x = old.x; x < old.x + 10; x++) {
        $(".div-" + x + "-" + old.y).removeClass('view-t');
        $(".div-" + x + "-" + (old.y + 9)).removeClass('view-b');
    }
    for (let y = old.y; y < old.y + 10; y++) {
        $(".div-" + old.x + "-" + y).removeClass('view-l');
        $(".div-" + (old.x + 9) + "-" + y).removeClass('view-r');
    }
    // render viewport on current map
    $("#current-map").html("");
    for (let y = newv.y; y < newv.y + 10; y++) {
        $("#current-map").append('<div class="row r' + y +'" ></div>');
        for (let x = newv.x; x<newv.x+10; x++){
            $("#current-map > .r" + y).append('<div class="gridbox div-' + x + '-' + y + '"></div>')
        }
    }
}

function moveUp() {
    if (selfy < gridSize - 1) {
        selfy--;
    }
    return { x: selfx, y: selfy };
}

function moveDown() {
    if (selfy > 0) {
        selfy++;
    }
    return { x: selfx, y: selfy };
}

function moveRight() {
    if (selfx < gridSize - 1) {
        selfx++;
    }
    return { x: selfx, y: selfy };
}

function moveLeft() {
    if (selfx > 0) {
        selfx--;
    }
    return { x: selfx, y: selfy };
}

function enterCombat() {
    myVar = setTimeout(function(){
        var combat = new Audio("./media/combatlaunch.mp3") ;
        combat.play();
        myVar = setTimeout(function(){
            $("body").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            myVar = setTimeout(function(){
                location.href = '/combat';
            }, 2000);
        }, 100);
    }, 100);
}

$(document).ready(function () {
    var socket = io();

    socket.on('pushsocketid', function (data) {
        socketid = data.id;
        console.log("Assigned ID is: " + socketid);
    });

    socket.on('updategrid', function (data) {
        let idkeys = Object.keys(data.hash)
        resetGrid();
        for (subject = 0; subject < idkeys.length; subject++) {
            if (data.hash[idkeys[subject]].id == socketid) {
                selfx = data.hash[idkeys[subject]].x;
                selfy = data.hash[idkeys[subject]].y;
                if (viewportstart.x==undefined ||
                    selfx < viewportstart.x ||
                    selfx > viewportstart.x + 9 ||
                    selfy < viewportstart.y ||
                    selfy > viewportstart.y + 9
                ) {
                    let oldview = viewportstart;
                    viewportstart = { x: Math.floor(selfx / 10) * 10, y: Math.floor(selfy / 10) * 10 };
                    console.log("changing viewport to ", viewportstart.x, viewportstart.y)
                    drawViewport(oldview, viewportstart);
                }
                $(".div-" + selfx + "-" + selfy).css({ 'background': '#007bff', "background-image": "url('img/player.png')" });
            } else {
                var curx = data.hash[idkeys[subject]].x;
                var cury = data.hash[idkeys[subject]].y
                if (data.hash[idkeys[subject]].type == 1) {
                    $(".div-" + curx + "-" + cury).css({ 'background': 'gray', "background-image": "url('img/other.png')" });
                } else if ((data.hash[idkeys[subject]].type < 0)) {
                    switch (data.hash[idkeys[subject]].type) {
                        case -1: // orc
                            $(".div-" + curx + "-"  + cury).css({ 'background': 'red', "background-image": "url('img/orc-head.png')" });
                            break;
                        case -2: // goblin
                            $(".div-" + curx + "-"  + cury).css({ 'background': 'red', "background-image": "url('img/goblin-head.png')" });
                            break;
                        case -3: // ogre
                            $(".div-" + curx + "-"  + cury).css({ 'background': 'red', "background-image": "url('img/ogre-head.png')" });
                            break;
                    }
                }
            }
            console.log('selfx: ' + selfx);
            console.log('selfy: ' + selfy);
            console.log('curx: ' + curx);
            console.log('cury: ' + cury);
            if (selfx == curx && selfy == cury) {
                (data.hash[idkeys[subject]].type == 1) ? console.log(">>> player collision <<<") : enterCombat();
            }
        }
    });

    $("#moveup").click(function () {
        move = moveUp();
        socket.emit('playermove', move);
    });
    $("#movedown").click(function () {
        move = moveDown();
        socket.emit('playermove', move);
    });
    $("#moveright").click(function () {
        move = moveRight();
        socket.emit('playermove', move);
    });
    $("#moveleft").click(function () {
        move = moveLeft();
        socket.emit('playermove', move);
    });

    $(document).keyup(function (key) {
        console.log(key.which)
        switch (key.which) {
            case 38: //UP
                move = moveUp();
                socket.emit('playermove', move);
                break;

            case 39: //RIGHT
                move = moveRight();
                socket.emit('playermove', move);
                break;
            case 40: //DOWN
                move = moveDown();
                socket.emit('playermove', move);
                break;
            case 37: //LEFT
                move = moveLeft();
                socket.emit('playermove', move);
                break;
        }
    });

});
