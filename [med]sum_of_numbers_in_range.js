//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

//The lowest number will not always come first.

function sumAll(arr) {
  var sums = 0;
  arr.sort(function(a,b){
    return a-b;
  });
  for(var i=arr[0];i<=arr[1];i++){
    sums+=i;
  }
  return sums;
}

sumAll([1, 4]);
