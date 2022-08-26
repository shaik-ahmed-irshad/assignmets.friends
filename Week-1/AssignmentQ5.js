/*
Q. roots of quadratic equation, nature of roots.
*/
var a=1, b=2, c=1;
var d=(b*b)-(4*a*c);
if(d>=0)
{
	var r1= (-b+Math.sqrt(d))/(2*a);
	var r2= (-b-Math.sqrt(d))/(2*a);
	if(d>0)
	{
		console.log(`Roots are (${r1},${r2}) and are Real and Unequal`);
	}
	else if (d==0)
	{
		console.log(`Roots are (${r1},${r2}) and are Real and Equal`);
	}
}
else
{
	console.log(`Roots are Imaginary`);
}