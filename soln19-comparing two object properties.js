// 19. wap to compare two objects to determine if the first one contains the same properties as the second one (which may have additional properties)

 const obj1 ={a:1,b:2,c:3};
 const obj2 ={a:6,b:2,c:8};
 const obj3 ={a:23,b:20,d:13};

 const objectsEqaul=(a,b) => Object.keys(a).every(key=>b[key]);

console.log(objectsEqaul(obj1,obj2));
console.log(objectsEqaul(obj1,obj3));
console.log(objectsEqaul(obj2,obj3));