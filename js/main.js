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

// check for win
// var boxes = $('#puzzle')
// boxes.eq(0)
//
// var puzzleOrder = []
// for (var i=0; i< boxes.length; i++){
// 	puzzleOrder.push (boxes.eq(i).text())
// }
//
// if(puzzleOrder.join('') == "123456789101112131415")
// 	alert("YOU WON!")
