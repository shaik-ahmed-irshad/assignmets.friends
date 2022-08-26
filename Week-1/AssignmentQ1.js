/*
Q. Accept only numbers, Make a number always positive though given negative? With & without builtin function?
*/
var num=-5;
if(num>0)
{
	console.log("Already Positive");
}
else if(num<0)
{
	console.log(`Without using builtin function ${num*-1}`);
	console.log(`Using builtin function ${Math.abs(num)}`)
}
else if(num==0)
{
	console.log(num);
}
else
{
	console.log("NaN");
}