/*
Q. Check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
	ii) Take coordinates as input.
*/
var p1=[3,0]
var p2=[0,4]
var p3=[4,7]

var s1=((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)**0.5;
var s2=Math.sqrt((p2[0]-p3[0])**2 + (p2[1]-p3[1])**2);
var s3=Math.sqrt((p1[0]-p3[0])**2 + (p1[1]-p3[1])**2);

if(s1+s2>s3 && s2+s3>s1 && s1+s3 > s2 )
{
	if(s1==s2 && s2==s3)
	{
		console.log("Its an Equilateral Triangle");
	}
	else if(s1==s2 || s2==s3 || s1==s3)
	{
		console.log("Its an Isosceles Triangle");
	}
	else
	{
		console.log("Its a Scalene Triangle");
	}
}
else
{
	console.log("Its not a Triangle");
}
