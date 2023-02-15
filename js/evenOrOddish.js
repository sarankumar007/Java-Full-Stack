var a = 121;
const evenishororoddish=(x)=>{
    var ans = 0;
    while(x>0){
        var rem = x%10;
        ans = ans+rem;
        x=Math.floor(x/10);
    }
    if(ans%2==0){
        return "evenish";
    }else{
        return "oddish";
    }
}
var ans = evenishororoddish(a);
console.log(ans);