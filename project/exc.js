"use strict"  //只有放在第一行，整个js才是严格模式如果没有放在第一行则为正常模式
//错误捕获
function message() { 
	var txt=""; 
    try { 
        adddlert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n\n"; 
        txt+="错误描述：" + err.message + "\n\n"; 
        txt+="点击确定继续。\n\n"; 
        alert(txt); 
    } 
}

function throwException(){
	var message,x;
	message = document.getElementById("message");
	message.innerHTML = "";
	x = document.getElementById("input").value;
	try{

		console.log(x);
		if (x == "") {
			throw "值为空";
		};
		if(isNaN(x)) {
			throw "不是数字";
		}
		
        x = Number(x);
        if(x < 5) {
        	throw "太小";
        }   	
        if(x > 10) {
			throw "太大";
        }
        
        message.innerHTML = x; 
	}catch(err){
		message.innerHTML = "错误描述："+err;
	}
}

function debugTest(){
	var x = 15 * 5;
	// debugger;
	document.getElementById("debug").innerHTML = x;
}

// "use strict"  //放在这里不是严格模式
function yangemoshi(){
	"use strict" //放在函数中，表示这个函数是严格模式
	x = 3.14;
	y = 'haha';
}

function yange(){
	x = 'haha';
	"use strict" //必须放在第一行，否则不是严格模式
	 x = 3.14;
}




























