var carName = 1;

function typety(){

	var carName = "Volvo"
	number = 001;
	console.log(carName);
}

function test(){
	console.log(carName);
}

function displayDate(){
	document.getElementById('demo').innerHTML = "现在的时间是：" + Date();
}

function stringTest(){
	var carName = "Volvo";
	var caaName = 'BMW';
	var charString = carName[2];
	console.log(carName);
	console.log(caaName);
	console.log(charString);


	var sayHi = "It\'s allRight";
	console.log(sayHi);

	var stringLenght = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
	var length = stringLenght.length;
	console.log(stringLenght.length);
}

function gogo(){
	var a = 10;
	var b = 50;
	document.write(a + b + "<br>");
	document.write(a - b + "<br>");
	document.write(a * b + "<br>");
	document.write(a / b + "<br>"); 
	document.write(a % b + "<br>"); 
	document.write(a++ + "<br>");
	document.write(a-- + "<br>");
	document.write(++a + "<br>");
	document.write(--a + "<br>");
}

function istrue(){
	var a = "5";
	var b = "5";
	var c = new String("5");
	console.log(a == b);
	console.log(a === b);
	console.log(a == c);
	console.log(a === c);

}

function threeTest(){
	var a = 5;
	var b = 10;

	return a < 7 ? a < b ? a = b : "true" : "false";
}

function printl(){
	console.log(threeTest())
}

function swi(){
	var d=new Date().getDay(); 
	switch (d) { 
  		case 0:
  			x="今天是星期日"; 
  		break; 
  		case 1:
  			x="今天是星期一"; 
  		break; 
		case 2:
			x="今天是星期二"; 
		break; 
		case 3:
			x="今天是星期三"; 
		break; 
		case 4:
			x="今天是星期四"; 
		break; 
		case 5:
			x="今天是星期五"; 
		break; 
		case 6:
			x="今天是星期六"; 
		break; 
	}
	console.log(x);
}

function foree(){
	for (var i = 0; i < 10; i++) {
		document.write(i + '<br>')
	};
}

function forin(){
	var persion = {fname:"John", lName:"zhang", age:26}; 
	for (x in persion) { //x为属性名
		console.log(persion[x]);  
	};
}

function whileTest(){
	var i = 0;
	while(i <= 10){
		console.log(i);
		i++;
	}
}

function dowhile(){
	var i = 0;
	var x = 0;
	do{
	    x=x + "The number is " + i + "<br>";
	    console.log(x);
	    i++;
	}while (i<5);
}

//条件判断时候，如果判断语句后边只有一句的时候可以省略花括号，但是不推荐这样写，不友好
//break  是直接结束循环
function breakTest(){
	for (var i = 0; i < 10; i++) {
		if(i == 3){
			break;
		}

		console.log(i);
	};
}

//continue  只是跳出当前的循环
function continueTest(){
	for (var i = 0; i < 10; i++) {
		if (i == 3) {
			continue;
		};
		console.log(i);
	};
}

//typeof 操作符是判断当前对象的类型
function typeofTest(){
	console.log(typeof "John");
	console.log(typeof 3.14);
	console.log(typeof [1,3,4]);
	console.log(typeof true);
	console.log(typeof {name:'John', age:18});
}
//特殊类型,当一个变量没有赋值的时候，值和类型为undefined
function typeofTest1(){
	var persion = null;
	console.log(typeof persion);
	var persion = undefined;
	console.log(typeof persion);
	var persion;
	console.log(persion);

	//null和undefined 值相等，类型不同
	console.log(null == undefined);
	console.log(null === undefined);
}