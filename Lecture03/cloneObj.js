// Object clonning
// Obj Ref, Obj Clonning assign(),{... x},JSON
//
const obj1 = {
    person : 'Anirach',
    weight : 85
}

// const obj2 = obj1;
// const obj2 = Object.assig({},obj1);
const obj2 = {... obj1};
obj2.weight = 75;
obj2.person = "Tom";
console.log(obj1);
console.log(obj2);