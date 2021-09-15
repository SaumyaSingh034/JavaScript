 var myObj = {
   "prop1" : "Hello",
   "prop2" : 1234,
   "prop3": true,
   "objProp" : {
     "innerProp": "Inner Property"
   }
 };
//console.log(myObj.objProp.innerProp);

myObj.objProp.newInner = "new Inner value";

console.log(myObj);
console.log(myObj.objProp["newInner"]);