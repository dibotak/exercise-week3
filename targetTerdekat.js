function targetTerdekat(arr) {
  var indexO = [];
  var indexX = [];
  var jarak = [];

  //cari index O
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'o') {
      indexO.push(i);
    }
  }

  //cari index X
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'x') {
      indexX.push(i);
    }
  }

  //cari jarak, masukin ke array
  for (var i = 0; i < indexX.length; i++) {
    for (var j = 0; j < indexO.length; j++) {
      if (indexX[i] < indexO[j]) {
        jarak.push(indexO[j] - indexX[i]);
      } else if (indexX[i] > indexO[j]) {
        jarak.push(indexX[i] - indexO[j]);
      }
    }
  }

  //cari jarak terkecil
  var low = jarak[0];
  for (var i = 0; i < jarak.length; i++) {
    if (jarak[i] <= jarak[i+1] && jarak[i] <= low) {
      low = jarak[i];
    } else if (jarak[i+1] < jarak[i] && jarak[i+1] <= low) {
      low = jarak[i+1]
    }
  }

  if (low == undefined) {
    low = 0;
  }

  return low;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
