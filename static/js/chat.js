var newSession = true;

$(document).ready(function () {
    var socket = io();

    if (newSession) {
        var userhandle = prompt("Please enter a chat room name", "Player1");
        if (userhandle != null) {
            socket.emit('announceentry', { handle: userhandle });
        }
        newSession = false;
    }

    socket.on('updatechatlog', function (data) {
        console.log("updatechatlog");
        $("#chathistory").html(data.log);
    });


    $("#sendbtn").click(function () {
        console.log("sendbtn");
        let msgtext = $("#messagetext").val();
        if (msgtext != "") {
            socket.emit('newpost', { msg: msgtext });
            $("#messagetext").val("");
        }
    });

    $('#messagetext').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            let msgtext = $("#messagetext").val();
            if (msgtext!=""){
                socket.emit('newpost', { msg: msgtext });
                $("#messagetext").val("");
            }
        }
    });

});
