/*
Q. Check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
	i) if directly lengths are given.
*/
var a=7,b=7,c=7;
if(a+b>c || b+c>a)
{
	if(a==b && b==c)
	{
		console.log("Its an Equilateral triangle");
	}
	else if(a==b || a==c || b==c)
	{
		console.log("Its an Isosceles triangle");
	}
	else
	{
		console.log("Its a Scalene triangle");
	}
}
else
{
	console.log("Its not a triangle");
}
