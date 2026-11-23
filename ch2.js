function challenge2(arr){
    let reverse=[];
    let index=arr.length-1;
    for(let i=0; i<arr.length;i++){
        reverse[i]=arr[index];
        index--;
    }
    return reverse;
}
let arr=[14,15,16,20];
console.log(challenge2(arr));
arr=[5,4,3,2,1];
console.log(challenge2(arr));
arr=[];
console.log(challenge2(arr));