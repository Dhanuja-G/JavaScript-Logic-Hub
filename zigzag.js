function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    var rows = buildRows(s, numRows);

    return rows.join("");
}

function buildRows(s, numRows) {
    var rows = [];

    for (var i = 0; i < numRows; i++) {
        rows[i] = "";
    }

    var currentRow = 0;
    var goingDown = false;

    for (var j = 0; j < s.length; j++) {
        rows[currentRow] += s[j];

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        if (goingDown) {
            currentRow++;
        } else {
            currentRow--;
        }
    }

    return rows;
}

function createPattern(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    var grid = [];
    for (var i = 0; i < numRows; i++) {
        grid[i] = [];
    }

    var currentRow = 0;
    var currentColumn = 0;
    var goingDown = false;

    for (var j = 0; j < s.length; j++) {
        grid[currentRow][currentColumn] = s[j];

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        if (goingDown) {
            currentRow++;
        } else {
            currentRow--;
            currentColumn++;
        }
    }

    var pattern = "";

    for (var row = 0; row < numRows; row++) {
        for (var column = 0; column <= currentColumn; column++) {
            pattern += grid[row][column] || " ";
            pattern += " ";
        }

        if (row !== numRows - 1) {
            pattern += "\n";
        }
    }

    return pattern;
}

var result = convert("PAYPALISHIRING", 3);
console.log(result);

function showConversion() {
    var input = document.getElementById("stringInput").value;
    var rows = parseInt(document.getElementById("rowInput").value);

    if (input === "" || isNaN(rows) || rows < 1) {
        document.getElementById("output").innerText = "Enter a valid string and row count.";
        document.getElementById("patternOutput").innerText = "";
        return;
    }

    var output = convert(input, rows);

    document.getElementById("output").innerText = output;
    document.getElementById("patternOutput").innerText = createPattern(input, rows);
}

showConversion();
