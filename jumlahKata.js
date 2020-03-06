function hitungJumlahKata(kalimat) {
  //membuat pemisah kata
  function toArr(string) {
    var strTemp = '';
    var arr = [];
    string+= ' '
    for (var i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        strTemp += string[i];
      } else if (string[i] === ' ' && strTemp.length !== 0){
        arr.push(strTemp);
        strTemp = '';
      }
    }
    return arr;
  }
  return toArr(kalimat).length;
}

// TEST CASES
console.log(hitungJumlahKata('I       have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake    ')); // 6
console.log(hitungJumlahKata('A song to    sing')); // 4
console.log(hitungJumlahKata('I    ')); // 1
console.log(hitungJumlahKata('I believe      I can code')); // 5
