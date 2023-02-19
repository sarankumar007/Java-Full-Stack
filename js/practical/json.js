const users = {

  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      point: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 25,
      isLoggedIn: false,
      points: 50
    }


  };
var count=0;
var points=0;
Object.entries(users).forEach((entry) => {
    const [key, value] = entry;
    if(value.isLoggedIn=== true)
    count++;
    if(value.points>=50)
    points++;
  });
  console.log(count);
  console.log(points)

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Aaaa',
  lastName:'Ye',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

//exercise1

const for_json=JSON.stringify(skills);
console.log(for_json);

const ages=JSON.stringify(age);
console.log(ages);

const students=JSON.stringify(student)

//exercise2

var obj={}
Object.entries(student).forEach((entry)=>{
    const[key,value]=entry;
    if(key=='firstName' || key=='lastName' || key=='skills')
obj[`${key}`]=value
})
const made=JSON.stringify(obj);
console.log(made)

