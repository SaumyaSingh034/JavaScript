var person = 
    {
  "firstName": "Saumya",
  "lastName": "Singh",
   "getFullName": function()
  {
    return this.firstName+ " "+this.lastName;
  },
  "address": {
   "street":"SA-17/2 P-10Ananpuri Colony",
   "city" : "Varanasi",
  "state" : "UP"
},
"isFromState": function(state){
 return(this.address.state === state);
   
}

};
console.log(person.isFromState("ABN"));
