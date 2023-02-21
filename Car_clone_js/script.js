const con=document.querySelector(".part2")
const con1=document.querySelector(".part3")
window.onscroll=(e)=>{
    var s=window.pageYOffset
    if(s>350)
    {
        con.style.opacity="1";
        
        
    }
    if(s>1000){
        con1.style.opacity="1";
        console.log("hi")
    }
}