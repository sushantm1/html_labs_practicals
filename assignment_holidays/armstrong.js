//prgm to check a number is armstrong or not armstrong

var x=370
var temp=x
let final=0
console.log("input value",x);
while(x>0){
    let res=x%10;
    final=final+(res*res*res);
    x=Math.floor(x/10);
}
if(temp==final){
    console.log("it's a armstron numbetr",final);
}
else{
    console.log("it's a not armstron numbetr",final)
}