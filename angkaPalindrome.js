function angkaPalindrome(num) {
  while (true) {
    num++;
    var strNum = num.toString();
    var numTemp = '';
    var answer = false;
    
    for (var i = 0; i < strNum.length; i++) {
      numTemp += strNum[strNum.length - 1 - i];
    }
    if (strNum === numTemp) {
      answer = num;
      break;
    }

  }
  return answer;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
