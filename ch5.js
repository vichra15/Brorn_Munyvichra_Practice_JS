function challenge5(text){
    let count=1;
    for(let i=0;i<text.length;i++){
        if(text[i]==" "){
            count++;
        }
    }
    return count;
}
let text="hello world";
console.log(challenge5(text));
text="this is the best day";
console.log(challenge5(text));
text="a bb ccc ddddddd e";
console.log(challenge5(text));