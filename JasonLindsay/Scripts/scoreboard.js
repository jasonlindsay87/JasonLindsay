$(document).ready(function () {

    setInterval('updateClock()', 1000);
    setInterval('updateTableClock()', 1000);

    $('#enterTableNumBtn').on('click', function () {
        if ($('#tableNumberInput').val() == '') {
            $.confirm({
                title: 'Table number',
                content: 'Please enter the table number',
                type: 'green',
                buttons: {
                    ok: {
                        text: "Ok",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {
                        }
                    }
                }
            });
        } else {
            $('#tableNumContainer').attr('style', 'display:none;');
            $('#playerNamesContainer').removeAttr('style');

            $('.table-number').html(" &nbsp;" + $('#tableNumberInput').val());     
        }
    });

    $('#enterPlayerNamesBtn').on('click', function () {
        if ($('#p1Name').val() == '' || $('#p2Name').val() == '') {
            $.confirm({
                title: 'Player names',
                content: 'Please enter player names.',
                type: 'green',
                buttons: {
                    ok: {
                        text: "Ok",
                        btnClass: 'btn-primary',
                        keys: ['enter'],
                        action: function () {
                        }
                    }
                }
            });
        } else {
            $('#playerNamesContainer').attr('style', 'display:none;');
            $('#scoreboardContainer').removeAttr('style');
            $('.player1-name').html($('#p1Name').val());
            $('.player2-name').html($('#p2Name').val());
            $('#tableTime').removeAttr('style');
            seconds = 0;
        }
    });

})
var seconds = 0;

function updateClock() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var hrs = today.getHours()
    var mins = today.getMinutes()
    var secs = today.getSeconds()


    if (month < 10) { month = "0" + month; }
    if (day < 10) { day = "0" + day; }
    if (hrs < 10) { hrs = "0" + hrs; }
    if (mins < 10) { mins = "0" + mins; }
    if (secs < 10) { secs = "0" + secs; }

    var date = day + '-' + month + "-" + today.getFullYear() + "     " + hrs + ":" + mins;// + ":" + secs;

    $('#time').html(date);
}

function updateTableClock() {
    ++seconds
    var secs = seconds < 10 ? "0" + (seconds % 60) : (seconds % 60);
    if (secs.toString().length< 2) secs = "0" + secs;

    var mins = Math.floor(seconds / 60);
    if (mins.toString().length < 2) mins = "0" + mins;

    var hrs = Math.floor(seconds / 3600);
         
    if (hrs < 10) hrs = "0" + hrs;

    $('#tableTime').html("- " + hrs + ":" + mins + ":" + secs);
}

function addScore(score) {
    scoreList.push(score);
    updateBoard(score);
    showhideUndoButton("show");
}

var scoreList = [];
var total = 0;
var ballTable = document.getElementById("ballCounterTable");

function updateBoard(iScore) {
    if (!iScore == '') {
        var ballTable = document.getElementById("ballCounterTable");
        var newRow = ballTable.insertRow(ballTable.rows.length);
        var newCell = newRow.insertCell(0);
        if (iScore == 1) {
            newCell.className = "redBall";
        }
        if (iScore == 2) {
            newCell.className = "yellowBall";
        }
        if (iScore == 3) {
            newCell.className = "greenBall";
        }
        if (iScore == 4) {
            newCell.className = "brownBall";
        }
        if (iScore == 5) {
            newCell.className = "blueBall";
        }
        if (iScore == 6) {
            newCell.className = "pinkBall";
        }
        if (iScore == 7) {
            newCell.className = "blackBall";
        }
    }



    document.getElementById("board").value = scoreList.join("\n");
    total = 0;
    for (var i = 0, len = scoreList.length; i < len; i++) {
        total += scoreList[i];
    }
    document.getElementById("totalScore").innerHTML = "Total - " + total;

    if (scoreList.length > 0) {
        document.getElementById("lastScore").innerHTML = "Last Score - " + scoreList[scoreList.length - 1];
    }
    else document.getElementById("lastScore").innerHTML = "Last Score - 0";
}

function resetScoreboard() {
    scoreList = [];
    var ballTable = document.getElementById("ballCounterTable");
    document.getElementById("board").value = "";
    document.getElementById("totalScore").innerHTML = "Total - ";
    document.getElementById("lastScore").innerHTML = "Last Score - ";
    showhideUndoButton("show");
    for (var i = ballTable.rows.length - 1; i > -1; i--) {
        ballTable.deleteRow(i);
    }
}

function showhideUndoButton(state) {
    var undoButton = document.getElementById("bUndo");
    if (state == "show") {
        undoButton.style.display = "inline";
    }
    if (state == "hide") {
        undoButton.style.display = "none";
    }
}

function undoLastScore() {
    document.getElementById("ballCounterTable").deleteRow(-1);
    scoreList.splice(-1, 1);
    updateBoard();
    showhideUndoButton("hide");
}

