1)let str="Welcome guys";
let arr=str.split(" ");
let revstr="";
let i,j;
for(i=0;i<arr.length;i++){
    let s=arr[i];
    let s1="";
    for(j=s.length-1;j>=0;j--){
        s1+=s.charAt(j);
    }
    revstr=revstr+s1+" "
}
console.log(revstr);

2)let array = ['a', 'b', 'c', 'd', 'e', 'f'];

array.length = 0;

console.log(array);

3)for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }

4)function anagram(s,t){
    var arr1 = s.split("");
    var arr2 = t.split("");
    if(arr1.length != arr2.length){
        return false;
    }
    arr1.sort();
    arr2.sort();
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
}
console.log(anagram("anagram","gramana"));

5)class Queue {
    constructor() {
      this.enqueueStack = [];
      this.dequeueStack = [];
    }
  
    enqueue(element) {
      this.enqueueStack.push(element);
    }
  
    dequeue() {
      if (this.dequeueStack.length === 0) {
        while (this.enqueueStack.length > 0) {
          this.dequeueStack.push(this.enqueueStack.pop());
        }
      }
      return this.dequeueStack.pop();
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

6)const validate=(str)=>{
if(str.match("(^[A-Z]\. [A-Z][a-z]+$)|(^[A-Z]\. [A-Z]\. [A-Z][a-z]+)|(^[A-Z][a-z]+ [A-Z]\. [A-Z][a-z]+$)"))
{
    return " ";
}
else
return "";
}

var s="h. Wells"
let r=validate(s);
if(r.length>0)
console.log("true");
else
console.log("false");
