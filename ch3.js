function challenge3(arr){
    let sum=0;
    if (arr.length === 0) {
        return 0;
    }
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return (sum/arr.length);
}
let arr=[85, 90, 78, 92];
console.log(challenge3(arr));
arr=[10,20,30];
console.log(challenge3(arr));
arr=[];
console.log(challenge3(arr));