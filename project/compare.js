"use strict"
function twoShowResult(){
	document.getElementById('result').innerHTML = two();
}


function two () {
	var a = 10;
	if (a == "10") {
		return "值相等";
	}else{
		return "值不相等";
	};
}

function threeShowResult(){
	document.getElementById('result').innerHTML = three();
}

function three(){
	var a = 10;
	if (a === "10") {
		return "值相等";
	}else{
		return "值不相等";
	};
}

/**
* switch 判断永远是使用===
*/
function switchTest(a){
	switch (a){
		case 10:
			alert("输入的是数字10");
			break;
		case "10":	
			alert("输入的是字符串10");
			break;
	}
}

function getValue(id){
	return document.getElementById(id).value
}

function validateForm(){
	var x = document.forms['nameForm']['fname'].var
	if (x==null || x=="") {
		alert(姓必须填写);
		return false;
	};
}












