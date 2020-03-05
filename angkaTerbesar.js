function pasanganTerbesar(num) {
  var strNum = String(num); //mengubah num menjadi string
  var arr = []; //inisialisasi array kosong

  //memasukkan num kedalam array
  for (var i = 0; i < strNum.length; i++) {
    var strTemp = '';
    for (var j = i; j < i+2; j++) {
      if (strNum[j] === undefined) {
        break;
      }
      strTemp += strNum[j];
    }
    if (strTemp.length > 1) {
      arr.push(strTemp);
    }
  }

  //mengubah setiap arraynya menjadi number
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  //mencari nilai terbesar
  var hi = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i+1] && arr[i] >= hi) {
      hi = arr[i];
    } else if (arr[i] >= arr[arr.length-1] && arr[i] >= hi) {
      hi = arr[i];
    }
  }

  return hi;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
