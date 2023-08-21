// //pyramide

var rows = 5;
var cols = rows * 2;

for (var i = 0; i < rows; i++) {
  var str = " ";

  for (var j = 1; j <= cols; j++) {
    if (j < rows - i || j > rows + i) {
      str = str + "  ";
    } else {
      str = str + " *";
    }
  }
  console.log(str);
}

// //pyramide by number

var rows = 5;
var cols = rows * 2;

for (var i = 0; i < rows; i++) {
  var str = " ";

  for (var j = 1; j <= cols; j++) {
    if (j < rows - i || j > rows + i) {
      str = str + " ";
    } else {
      str = str + " " + i;
    }
  }
  console.log(str);
}

//Dimonde

var rows = 5;
var cols = rows * 2;

for (var i = 0; i < rows; i++) {
  var str = " ";

  for (var j = 1; j <= cols; j++) {
    if (j < rows - i || j > rows + i) {
      str = str + "  ";
    } else {
      str = str + " *";
    }
  }
  console.log(str);
}

for (var i = 3; i >= 0; i--) {
  var str = " ";

  for (var j = 1; j <= cols; j++) {
    if (j < rows - i || j > rows + i) {
      str = str + "  ";
    } else {
      str = str + " *";
    }
  }
  console.log(str);
}

// //while loop
// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//do while loop
var i = 1;
do {
  console.log(i);
  i++;
} while (i < 1);

