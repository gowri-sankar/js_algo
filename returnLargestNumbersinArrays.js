//Return an array consisting of the largest number from each provided sub-array. For simplicity,
//the provided array will contain exactly 4 sub-arrays. [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function largestOfFour(arr) {
  // You can do this!
  var list = [];
  for(var i=0; i<arr.length;i++){
    var longest=0;
    for(j=0; j<arr[i].length;j++){
      if(arr[i][j]>longest){
        longest = arr[i][j];
      }
    }
    list.push(longest);
  }
  return list;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
