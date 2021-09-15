var add = function ()
{
  var i, sum=0;
  for(i=0;i< arguments.length; i++)
    {
      sum += arguments[i];
    }
  return sum;
}

console.log(add(10,5,4,5,6,7,13,22,98));
