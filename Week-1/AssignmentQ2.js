/*
Q. A shop will give discount of 10% only if you purchase more than 1000 rupees. Any item costs exactly 100 rupees. inputs = quantity of items. Result must be Final bill prize
*/
var items = 10;
var bill = 100*items;
if(bill >= 1000)
{
	console.log(`Total bill is ${bill-(bill*0.1)}`);
}
else
{
	console.log(`Total bill is ${bill}`)
}