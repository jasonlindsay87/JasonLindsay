$(document).ready(function () {

    var scoreList = [];
    var total = 0;
    var ballTable = document.getElementById("ballCounterTable");

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
        }
    });

    $('#enterPlayerNamesBtn').on('click', function () {
        $('#playerNamesContainer').attr('style', 'display:none;');
        $('#scoreboardContainer').removeAttr('style');

    });

    function addScore(score) {
        scoreList.push(score);
        updateBoard(score);
        showhideUndoButton("show");
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
})