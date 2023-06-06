function fibsRec(num) {
    if (n <= 1)
        return n;
    return fibsRec(n-1) + fibsRec(n-2);
}

function fibs(num) {
    let arr = [];
  
    for (var i = 0; i < num; i++) {
      if (i <= 1) {
        arr.push(i);
      } else {
        var nextNum = arr[i - 1] + arr[i - 2];
        arr.push(nextNum);
      }
    }
  
    return arr;
  }