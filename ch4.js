function challenge4(arr,letter){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(letter==arr[i]){
            count++;
        }
    }
    return count;
}
let arr="hello world";
let letter='o';
console.log(challenge4(arr,letter));
arr="aaa bbb a";
letter='a';
console.log(challenge4(arr,letter));
arr="abc";
letter='d';
console.log(challenge4(arr,letter));
