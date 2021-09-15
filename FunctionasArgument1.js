var f = function (name,job)
{
  console.log("Hello "+name+", the "+job);
};


var executor = function(fn,name,job)
{
  fn(name,job);
}

executor(f,"Saumya","Software Developer");
