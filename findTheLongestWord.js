function findLongestWord(str) {
  var longest=0;
  var array = str.split(' ');
  for(var i=0; i<array.length;i++){
    if(array[i].length > longest){
      longest = array[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
