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
