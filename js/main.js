var emptyRow = 3
var emptyColumn = 3

var puzzle = document.getElementById("puzzle")

// move numbers around in table
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
//check for win option, i think this is done
		var boxes = $('#puzzle')
		boxes.eq(0)

		var puzzleOrder = []
		for (var i=0; i< boxes.length; i++){
			puzzleOrder.push (boxes.eq(i).text())
		}

		if(puzzleOrder.join('') == "123456789101112131415")
			alert("YOU WON!")
}

// check for winner, not complete
// function determineWinner() {
//
// var check  = new Array(4)
// 	check[0] = new Array (1, 2, 3, 4)
// 	check[1] = new Array (5, 6, 7, 8)
// 	check[2] = new Array (9, 10, 11, 12)
// 	check[3] = new Array (13, 14, 15, 0)
//
//   	for (i = 0; i < 4; i++){
//     	if (rows[i] == check[i]){
// 			winner = false
//     		else
//         alert("Congratulations! You've Won!")
