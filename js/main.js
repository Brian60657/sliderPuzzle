var emptyRow = 3
var emptyColumn = 3

var puzzle = document.getElementById("puzzle")

function replace(x) {
	var row = x.parentElement.rowIndex
  var column = x.cellIndex

		if ((emptyColumn == column && Math.abs(emptyRow - row) == 1) || (emptyRow == row && Math.abs(emptyColumn - column) == 1)) {
			var x2 = document.getElementById("puzzle").rows[emptyRow].cells[emptyColumn]

			x2.innerHTML = x.innerHTML
      x.innerHTML = " "

			emptyRow = row
      emptyColumn = column
  	}
}
