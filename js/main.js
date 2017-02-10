//gets number from HTML table and moves to an empty cell(row/column)
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

  //checks for win///////////////////////////////////////////
  var boxes = $("td")
  boxes.eq(0)

  var puzzleOrder = []
  for (var i = 0; i < boxes.length; i++) {
    puzzleOrder.push(parseInt(boxes.eq(i).text()))
  }

  if (puzzleOrder.join("") == "123456789101112131415NaN")
    alert("YOU WON!")
}

//adds timer to puzzle////////////////////////////////////////
var minutesCount = document.getElementById("minutes")
var secondsCount = document.getElementById("seconds")
var secondsTotal = 0
setInterval(setTime, 1000)

function setTime() {
  ++secondsTotal
  secondsCount.innerHTML = pad(secondsTotal % 60)
  minutesCount.innerHTML = pad(parseInt(secondsTotal / 60))
}

function pad(value) {
  var valueString = value + ""
  if (valueString.length < 2) {
    return "0" + valueString
  } else {
    return valueString
  }
}

//adds sound to puzzle/////////////////////////////////////////
var clickSound = document.createElement("audio")
clickSound.setAttribute("src", "click_one.wav")

$("#puzzle").click(function() {
  clickSound.play()
})
