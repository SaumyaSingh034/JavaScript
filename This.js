var person = {
  "firstName": "Saumya",
  "lastName": "Singh",
  "getFullName" : function ()
  {
         return this.firstName+ " "+this.lastName ;  
  }
};
console.log(person.getFullName());


var person2 = person;
person = {};

console.log(person2.getFullName());