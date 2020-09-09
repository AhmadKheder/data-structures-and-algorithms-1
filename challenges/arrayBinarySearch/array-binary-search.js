console.log(search([4,8,15,16,23,42], 15)); //2
console.log(search([11,22,33,44,55,66,77],90)); //-1
console.log(search([11,22,33,44,55,66,77],11)); // 0
console.log(search([11,22,33,44,55,66,77],77)); // 6

function search (arr,num){
    let st =0;
    let ed = arr.length-1;
    let md = Math.ceil(arr.length/2);
    let key =true;

    while(key){
        if(num === arr[md]){
            return md
        }else if (num >arr[md]){
            st = md +1;
            md = Math.ceil((ed+st)/2)
            continue
        }else if (num < arr[md]){
            ed = md-1;
            md = Math.ceil((ed+st)/2);
            continue
        } else {

            return -1
        }

    }

}