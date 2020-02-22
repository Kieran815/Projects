function chunkArrayInGroups(arr, size) {
  // Break it up.
  let arrArr = []; // empty array for answers
  let arrSub = arr.length / size; // returns number
  if (arrSub < arr.length) { // check size for full sub-arrays
    arrArr.push(arr.split(arrSub));  // push subArr to arrArr
  } else if (arrSub > arr.length) {

  }



  return arrArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
