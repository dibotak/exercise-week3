function groupAnimals(animals) {
  //urutin animals
  var sorted = [];
  for (var j = 0; j < animals.length; j++) {
    for (var i = 0; i < animals.length; i++) {
      var temp = animals[i];
      if (animals[i] > animals[j]) {
        animals[i] = animals[j]
        animals[j] = temp;
      }
    }
  }

  //dicari kalo ada huruf yang sama, maka masukkan kedalam array
  var temp = [];
  for (var i = 0; i < animals.length; i++) {
    var check = true;
    for (var j = 0; j < temp.length; j++) {
      if (animals[i][0] === temp[j][0][0]) {
        temp[j].push(animals[i]);
        check = false;
      }
    }
    if (check) {
      temp.push([animals[i]]);
    }
  }

  //return
  return temp;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
