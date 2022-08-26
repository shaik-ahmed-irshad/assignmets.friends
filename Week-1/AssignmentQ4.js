/*
Q. Build Mini calculator having functionalities - *, /, +, - , %, squareroot, exponentiation, floor, ceil.
*/
var a=1.7, b=2;
var ch=6;
if(ch==1)
{
	console.log(`Sum = ${a+b}`);
}
else if(ch==2)
{
	console.log(`Difference = ${a-b}`);
}
else if(ch==3)
{
	console.log(`Product = ${a*b}`);
}
else if(ch==4)
{
	console.log(`Division = ${a/b}`);
}
else if(ch==5)
{
	console.log(`Floor = ${Math.floor(a)}`);
}
else if(ch==6)
{
	console.log(`Ceil = ${Math.ceil(a)}`);
}
else
{
	console.log(`Invalid Choice`);
}