var myArray = [1,2,3,"Hello", {}];

var myFunction = function(item)
{
  console.log("For each element"+item);
}

myArray.forEach(myFunction);