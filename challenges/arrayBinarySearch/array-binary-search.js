/* eslint-disable no-undef */


function search (arr,num){
  let st =0;
  let ed = arr.length-1;
  let md = Math.ceil(arr.length/2);
  let key =true;

  while(key){
    if(num === arr[md]){
      return md;
    }else if (num >arr[md]){
      st = md +1;
      md = Math.ceil((ed+st)/2);
      continue;
    }else if (num < arr[md]){
      ed = md-1;
      md = Math.ceil((ed+st)/2);
      continue;
    } else {

      return -1;
    }

  }

}

module.exports = search();
