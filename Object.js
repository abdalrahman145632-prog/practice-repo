let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let vov = structuredClone(user);
clone = {...user}

console.log(( clone.sizes.height )); 

let rar= Object.assign({},user)
console.table(rar)
console.log(rar.sizes===user.sizes ? true: false)
user.sizes.width= 75;
console.log(rar.sizes.width)
console.log(vov.sizes.width)

let person={

}
person.name="Abd";
console.log(person.name)


const students = [
  { name: "Aya", age: 26 },
  { name: "Omar", age: 24 },
];

console.log(students[0].name)


function createStudent (name , grade){
   return{ 
    name,
    grade,
    
    greet(){
        console.log( grade>=60 ? true : false)

    },
};
}
const student1 = createStudent("Abd", 99 );
const student2 = createStudent("Hamazi", 40 );
const student3 = createStudent("Ahmad", 55 );

student1.greet();
student2.greet();
student3.greet();


function mergeObjects(obj1, obj2) {
const  a= Object.assign({}, obj1, obj2);
  return a;
}

const obj1 = { 
  name0: "Abd", 
  age0: 24 };
const obj2 = { 
  name1: "Hamazi", 
  age1: 26 };
  
console.log(mergeObjects(obj1, obj2)); 
const student =
{
  name: "Abd",
  age: 24,
  city: "Amman",
  grade: 90
}

const bk=["name", "grade"];

function pickKeys(obj, keys) {
  const result = {};
  for (let key of bk) 
    {
      result[key] = obj[key];
    }
  return result;
}

console.log(pickKeys(student, bk));

function objectToArray (obj) {
  const result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

console.table(objectToArray(student));

const student10 = {
  name: "Abd",
  info: {
    age: 24,
    city: "Amman"
  }
};
 function deepClone(obj) {
  const reuslt = structuredClone(obj);
  return reuslt;


 }
 console.log(deepClone(student10));

 function countProperties (obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count; 
 }
 console.log(countProperties(student10));


 let user1 = {
  firstName: "Abd",
  sayHello() {
    let arrow = () => 
      console.log(`Hello, ${this.firstName}`);
    
    arrow();
  }

 }
 user1.sayHello(); 

 function makeUser() {
  return {
    name: "John",
    ref(){
      return this;
    }
  };
}


let user22 = makeUser();

let m= ()=>console.log(user22.ref().name); // What's the result?
m();

let calculator = {
  read(a,b) {
    this.firstNumber = a;
    this.secondNumber = b;
    
  },
  sum(){
    return this.firstNumber + this.secondNumber;
  },
  mul(){
    return this.firstNumber * this.secondNumber;
  },
};

calculator.read(5, 10);
console.log( calculator.sum() );
console.log( calculator.mul() );

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // allows method chaining
  },
  down() {
    this.step--;
    return this; // allows method chaining
  },
  showStep: function() { // shows the current step
    console.log( this.step );
    return this; // allows method chaining
  }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); 
ladder.up().up().down().showStep().down().showStep();


