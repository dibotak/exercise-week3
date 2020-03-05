function palindrome(kata) {
  var answer = false;
  //membuat kata terbalik
  var kataTemp = ''
  for (var i = 0; i < kata.length; i++) {
    kataTemp += kata[kata.length - 1 - i];
  }

  //cek sama atau tidak
  if (kata === kataTemp) {
    answer = true;
  }
  return answer;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
