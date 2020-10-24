function read()
{
	var val;
	if( document.getElementById("textbox").value != "" )
		val = document.getElementById("textbox").value + ";";
	else
		val = "5;";
	
	var now = new Date();
	now.setMonth(now.getMonth()+1);
	document.cookie = "value=" + val + "expires=" + now.toGMTString() + ";";
	
//	  var now = new Date();
//	  var time = now.getTime();
//	  var expireTime = time + 1000*36000;
//	  now.setTime(expireTime);
//	  document.cookie = 'cookie=ok;expires='+now.toGMTString()+';path=/';
}

function display()
{
	alert( document.cookie );
}

function load()
{
	// var fruits = new Array( "apple", "banana", "pomegrenade" );
	// alert( fruits.constructor )
    
    var obj = { a: 10 };
    var ret = Object.getOwnPropertyDescriptor(obj, 'a');
    alert(ret.writable);
}