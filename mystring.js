//length

//var text="hello";
//alert(text.length)
//document.write(text.length)


//extract part of strings

/*let str=" hello and world"
let part=str.slice(3,10)
let sc=str.slice(-11,-4)
let scr=str.slice(-11)
let le=str.slice(3)*/
//document.write(sc)

//document.write(le)

//document.write(scr)


//document.write(part)


//document.write(sc)
//document.write(part.length)
//document.write(str.length)

//SUBSTRING

/*let str="hello and welcome"
let part=str.substring(3,10);
document.write("value  " +part);*/


/*let str="hello and welcome"
let part=str.substring(-11,-10);
document.write("value  " +part);*/

//let str="hello and welcome"
//let part=str.substr(-3);
//document.write("value  " +part);
//let part1=str.replace("and","is");
//document.write("value  " +part1);
//concat
/*let str="hai";
let str2="hello";
let str3= str.concat(str2)
document.write(str3);*/
//ToUppercase

/*let str="ardra";
let str1=str.toUpperCase();
document.write(str1);*/

//trim

/*let str="ardra  ashok   ";
let str1=str.trim();
document.write(str1);*/

//charAT() and cHARCodeAT()

/*let str="welcome to technopark"
let str2=str.charAt(1);

let str3=str.charCodeAt(0);
document.write(str2)
document.write(str3);*/


//arithematic opertaion

/*var a=12, b=10;
var result=a+b;
var result1=a-b;
var result2=a*b;
var result3=a/b;*/
//alert(result);
//document.write(result);

//document.write(result1);

//document.write(result2);

//document.write(result3);

//evaluate eval()

//var a=2 ;
//var b=5;
//var result=eval("a*12+b*7");
//alert(result);

/*var a=12;
var b=10;
var result=a>b;
var result2=a>b;
var result3=a>=b;
var result4=a<=b;
document.write(result);
document.write(result2);
document.write(result3);
document.write(result4);*/

//conditional operataions

/*var a=12 , b=11;
if(a>b)
{
    document.write(a +"is greatre than "+b)
}
*/
// if-else

/*var a=10 , b=11;
if(a>b)
{
    document.write(a +"is greatre than "+b)
}

else
{
    document.write(b+"is greater");
}
*/

/*var a=12, b=11,c=15;
if(a>b &&  a>c)
{
    document.write(a +"is greatre");
}

else if( b>c)
{
    document.write(b +"is greater");
}
else
{
    document.write(c +"is greater");
}
*/

//switch

/*var  dayname;
switch (new Date().getDay())
 {
    
case 1:
dayname = "monday"
break; 
case 2:
dayname = "tuesday"
break;
 case 3:
dayname = "wednesday"
break; 
case 4:
dayname = "thursday"
break; 
case 5:
dayname = "saturday"
break;
case 6:
dayname = "sunday"
break;
default:
    dayname="invalid day"
}
document.write("today is "+dayname);
*/

//while loop
/*var a=5;
while(a<=10)
{
    document.write(a,"number");
    a=a+1;
    
}
*/

//for loop

/*for(var i =1;i<=10;i++)
{
    document.write(i +"<br>");
}
*/

//do while
/*var i=1;
do{
    document.write(i,"<br>");
    i++;
}
while(i<=5);*/


//functions 1

/*function add(a,b)
{
    return a+b;
}

 var res=add(5,2);
 document.write(res);*/

 //function 2

 /*var add1=function(a,b)
{
    return a+b;
}

 var res=add1(5,4);
 document.write(res);*/


 //arrow functions

 /*var add=(a,b)=>
 {
    return a+b;

 }

 //function call

 var res=add(5,4)
 document.write(res);


*/


//var add=[1,2,4,5]
//var res=add.map(a => a*a)

//alert(res);

/*function  myname(firstname,lastname)
{
document.write("hai  "+firstname+"  "+lastname);
}
myname("ardra","a");*/


//array

//var array1=[1,2,4,5]
//var array2=[9,8,7,4]
//alert(array1[0])
//array1[0]=5
//array1.push(8)
//array1.pop()

//alert(array1)

//array1.splice(1,0,9,8)
//array1.splice(1,2)
//alert(array1)

//for
/* var array1=["Apple","orange","mango"];
for (var i=0; i<=array1.length; i++)
{
    alert(array1[i])
}
*/
//=> function rename
//for each
/*var array1=["Apple","orange","mango"];
array1.forEach(i=>
    {
        alert(i)
    })
*/

//reversing

/*var array1=["Apple","orange","mango"];
for(var i=3;i<=array1.length-1;i--)
{
    alert(array1[i])
}
*/


//concat

var arr1=[1,2,5]
var arr2=[9,8,7]
var arr3=arr1.concat(arr2)