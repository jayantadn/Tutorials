/**
 * 
 */

function main()
{
	arr = new Array(10,20,-30);
//	alert( arr.every(testPositive) );
//	alert( arr.filter(testPositive) );
//	arr.forEach(testPositive);
	alert(arr.map(testPositive));
}

function testPositive( num )
{
//	return num > 0;
//	alert(num);
	return num+1;
}