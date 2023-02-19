//Use filter to filter out country start with 'E';

const countries=["England","India","Egypt"];

const count=countries.filter(name=>name.startsWith('E'));
console.log(count);


// using for each 
const names=["mohan","sk","ji","jack sparrow","jackson"];
const nam=names.forEach(element=>{
  console.log(element)
})

//Use map to create a new array by changing each number to square in the numbers array
const lam=[1,2,3,4,5,6];
const lammapped=lam.map((element)=>element*element)
console.log(lammapped)


//Use reduce to concatenate all the countries

const country = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const sentence=country.reduce((accumulator,currentvalue,id)=>{
  return id==country.length-1?accumulator+" and "+currentvalue +" are northern countries" : accumulator+", "+currentvalue;
})

    console.log(sentence);

//to display only the string items

const arr=["saran",1,2,3,"bol"]
const stringsonly=arr.filter((element)=> typeof element=="string")
console.log(stringsonly);



// Find out which letter is used many times as initial for a country name 
var con=["Finland", "Argentina", "Germany", "England", "Spain","France","Fiji"];
var map=new Map();
coun.forEach((c)=>{
    var k=c.charAt(0);
    if(!map.has(k)){
    map.set(k,1);
    }
    else{
    map.set(k,map.get(k)+1);
    }
})
var cons=0;
for(let i of map.keys()){
  if(map.get(i)>cons){
    cons=map.get(i);
    console.log(i);
  }
}

//assign the elements using destruction
const factors=[1,9.4,45,100];
 var [e,pi,humanbodyTemp,waterBodyTemp]=factors;

//empty set

const set1=new Set();
console.log(set1);

//for-loop from 0 to 10 in set

const set2=new Set();
for(let i=1;i<=10;i++){
    set2.add(i);
}
console.log(set2);

//clear a set
const b=[1,2,3,4];
const set3=new Set(b);
set3.clear();
console.log(set3);

//set with 5 strings
const set4=new Set();
const string=["siva","hasini","sk","santy","vj"];
string.forEach(function(ele){
    set4.add(ele);
})
console.log(set4);


//delete an Element
let c=[1,2,3,4];
const set5=new Set(c);
set5.delete(3);
console.log(set5);

//Create a map of countries and number of characters
const countries=["United States", "China", "Russia", "Brazil", "India", "Mexico", "Indonesia", "Pakistan", "Nigeria", "Bangladesh"];

const map=new Map();

for(let i=0;i<countries.length;i++) {
  const country=countries[i].length;
  map.set(countries[i],country);
}
console.log(map);


//Exercises level 2

const a = [4, 5, 8, 9];
const d = [3, 4, 5, 7];

//union
let uni=[...a,...d];
const union=new Set(uni);
console.log(union); 

//intersection
const intersection = a.filter(x => b.includes(x));
console.log(intersection);

//diff
const difference = a.filter(x => !b.includes(x));
console.log(difference);
