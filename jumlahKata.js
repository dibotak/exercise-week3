function hitungJumlahKata(kalimat) {
  //membuat pemisah kata
  function toArr(string) {
    var strTemp = '';
    var arr = [];
    for (var i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        arr.push(strTemp);
        strTemp = '';
      } else {
        strTemp += string[i];
      }
      if (string[i + 1] === undefined) {
        arr.push(strTemp);
      }
    }
    return arr;
  }
  return toArr(kalimat).length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
