// prgm to check a number is palindrom or not
var x= 2552552
var temp=x
var flag=0
while(x>0){
    var res=x%10;
    flag=flag*10+res;
    x=Math.floor(x/10);
}
if(flag!=temp){
    console.log("it's not a palindron")
}
else{
    console.log("it's a PALINDRON")
}
