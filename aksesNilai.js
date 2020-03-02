function balikString(input) {
  var balik = '';
  for (var i = 0; i < input.length; i++) {
    balik += input[input.length-1-i];
  }
  return balik;
}

console.log(balikString('hello world!'));
