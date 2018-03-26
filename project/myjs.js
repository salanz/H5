function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}


function ss(){
	var a = 7;
	var b = 19;
	var c = a * b;
	document.write(a + "<br>");
	document.write(b + "<br>");
	document.write(c + "<br>");
}

function varTest(){
	var a = 1;
	if (true) {
		var a = 2;       // 同样的变量!
        console.log(a);  // 2
	};
	console.log(a);
}


function letTest(){
	var a = 1;
	if (true) {
		let a = 2;
		console.log(a);
	};
	console.log(a);
}

/**
*  同样的类型可以多次赋值
*/
function a(){
	var x;    //没有赋值的时候打印undefined
	console.log(x);
	var x = 10;  
	console.log(x);
	var x = "kylo";
	console.log(x);
	var carname = 'Volvo XC60';
	console.log(carname);
	var carname = "Volvo XC60";
	console.log(carname);
	var answer = "it is allRight";
	console.log(answer);
	var answer = "He is 'jeffy'";
	console.log(answer);
	var answer = 'He is "jeffy"';
	console.log(answer);
	var x1 = 34.00;
	console.log(x1);
	var x2 = 34;
	console.log(x2);
	var b1 = 1e5;
	console.log(b1);
	var b2 = 1e-5;
	console.log(b2);
}


function classTest(){
	//局部变量
	var person = {
		firstName : "张",
		lastName : "翼风",
		id : 110
	}

	console.log(person.lastName);
	console.log(person["firstName"]);
	console.log(person.id);
}

//全局变量
var person = {
	firstName : "张",
	lastName : "翼风",
	id : 110,

	funName : function(){
		return this.firstName + " " + this.lastName;
	}
}

function getClassFun(){
	document.getElementById("demo").innerHTML = person.funName();
}

function getClassFun1(){
	document.getElementById("demo1").innerHTML = person.funName;
}

function getAlert(){
	alert("Hello World");
}


function argAlert(name, age){
	alert(name + " " + age);
}

function getfunc(a, b){
	return a * b;
}

function setfunc(a, b){
	document.getElementById("demo").innerHTML = getfunc(a, b);
}




