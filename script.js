// TODO:
"use strict";


// TODO: printing in console
// console.log("Hello World!");
// console.log('Hello World!');
// console.log(`Hello World!`);
// ! console.log can print something on console

//  TODO: DataTypes
// String
// Number (Integer, Float)
// Boolean (true/false)
// Null and Undefined
// Object 
// Symbol -> unique
// BigInt


// TODO: Primitive vs reference data type
// * primitive type - use stack memory
// let num1=6
// let num2=num1
// console.log("value of num1 is",num1)
// console.log("value of num2 is",num2)
// num1++   // ! value changes only in one
// console.log("value of num1 is",num1)
// console.log("value of num2 is",num2)
// * reference type - use heap memory
// let arr1=[1,2,3,4]
// let arr2=arr1
// console.log("array1",arr1)
// console.log("array2",arr2)
// arr1.push(50)   // ! value changes in both
// console.log("array1",arr1)
// console.log("array2",arr2)


// TODO: variables
// var firstname="Aviral";
// console.log(firstname);
//  ! variable names are case sensitive
// firstname="Mishra"
// console.log(firstname);

// firstname="Aviral"
// console.log(firstname);
 // ! We can create a variable without using var but if we want to avoid creating a variable without "var" keyword then we should write "use strict" on top of file


//TODO: Arithmatic Operations
// let value1=10
// console.log(value1+20)
// console.log(value1-20)
// console.log(value1*2)
// console.log(value1/2)
// console.log(value1/3)
// console.log(value1**2)
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)  // first value is in string so all the rest values will be treated as string
// console.log(1 + 2 + "2")  // first the calculation of 1+2 will be done and then will be concatenated with "2"
// console.log(1 + 2 + "3" + 4)


// first_name // * snake case writing
// firstname // * camel case writing


// TODO: "var" keyword
// var name="Aviral";
// console.log(name);
// var name="Mishra";
// console.log(name);


// TODO: "let" keyword
// let sname="Aviral"; // ! using "let" instead of "var"
// console.log(sname);
// sname="Mishra";
// console.log(sname);
// let sname="Mishra";  // ! In case of "let" again declaring a variable will give an error
// console.log(sname);

// ! 'let' and 'const' has block scope while 'var' has global scope
// var x = 1;
// let y = 1;
// if (true){
//     var x = 2;
//     let y = 2;
// }
// console.log(x);
// console.log(y);

// if (true){
//     var a = 10;
//     const b = 20;
// }
// console.log(a);
// console.log(b);


// TODO: Constants
//  ! We can create a constant by "const" keyword
// const pi=3.14;
// console.log(pi);
// pi=2.22; // ! assignment to constant will give an error


//  TODO: Conversion Operation
// let name = 'Aviral'
// let age = "20"
// let undef = undefined
// let nullVal = null
// let bool = true

// let nameInt = Number(name)   
// let ageInt = Number(age)
// let undefInt = Number(undef)
// let nullValInt = Number(nullVal)
// let boolInt = Number(bool)
// console.log(nameInt, ageInt, undefInt, nullValInt, boolInt)

// let check = 0
// let bool = Boolean(check)
// console.log(typeof bool , bool )

// let check = NaN
// console.log('NaN', typeof check );

// console.log(+true)
// let stringVal = "23"
// console.log(typeof +stringVal)


// TODO: prototype
// const newString = new String('Deva Shri Ganesha')
// console.log(newString.__proto__)


// TODO: typeof method
// let age=22
// console.log(typeof(age))     // ! "typeof" method
// console.log(typeof 25)
// console.log(typeof "Aviral")
// age=age+""   // ! number can be changed to string by adding ("") at last
// console.log(typeof age)
// let str="22"
// console.log(typeof str)
// str=+str    // ! string can be converted to number by adding a '+' symbol in front
// console.log(typeof str)

// * We can also use typecasting for this purose
// let num=33
// console.log(typeof num)
// num=String(num)      // ! String()
// console.log(typeof num)
// let str="23"
// console.log(typeof str)
// str=Number(str)      // ! Number()
// console.log(typeof str)

// let a=10
// let b=20
// console.log((a+"")+(b+""))
// let c="10"
// let d="20"
// console.log((+c)+(+d))



// TODO: Undefined , null , BigInt
// let name
// console.log(typeof name) // ! it shows undefined untill variable is assigned a value

// const name2     // ! constant need to be given a value
// console.log(typeof name2)

// let myvar=null
// console.log(typeof myvar) // ! typeof null gives object

// console.log(Number.MAX_SAFE_INTEGER) // ! largest number 
// let mynum=BigInt(12)
// console.log(typeof mynum)
// let mynum2=123n
// console.log(mynum)
// console.log(typeof mynum2)


// TODO: Booleans & comparison operator
// let num1=5,num2=7
// console.log(num1>num2)

// let a="10",b=10
// console.log(a==b)   // ! "==" only checks tha value not the datatype
// console.log(a===b)  // ! "===" checks value as well as datatype - strict checking

// console.log(a!=b)
// console.log(a!==b)

// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)  // ! comparison operator converts null to number which is 0 while equality operator(==) does not convert it to number


//////////////////////////////////////// TODO: String  /////////////////////////////////////////////
// TODO: Length property
// let str="Aviral"
// console.log(str.length) // ! "length" property
// console.log(str[3])
// console.log(str[-1])   // undefined
// console.log(str[str.length-1])


// TODO: chatAt()
// const newString = "Aviral-mishra"
// console.log(newString.charAt(9))
// console.log(newString.charAt(-1))  // ! we can do slicing from negative index but we can not access negative indexes


// TODO: indexOf()
// const newString = "May the force be with you"
// console.log("t: ", newString.indexOf("t"))
// console.log("force: ", newString.indexOf("force"))


// TODO: trim() method
// let str2="  *HelloWorld*  "
// console.log(str2.length)
// str2.trim()     // ! "trim" method removes the extra spaces from the string  
// console.log(str2)    // ! it does not work on same string the returned string has to be saved in another string
// console.log(str2.length)
// str2=str2.trim()
// console.log(str2)
// console.log(str2.length)


// TODO: replace()
// const newString = "who made my heart beat like thunder"
// console.log(newString.replace('who', 'you'))
// console.log(newString.replace('a', 'X'))
// console.log(newString.replaceAll('a', 'X'))
// console.log(newString)


// TODO: include()
// const newString = "Lightning and the Thunder"
// console.log(newString.includes('thunder'))
// console.log(newString.includes('Thunder'))
// console.log(newString.includes('n'))


// TODO: split()
// const newString = "split ko check kar rahe hai"
// const words = newString.split(' ', 4)
// console.log(words)


// TODO: toUpperCase() & toLowerCase()
// let str3="Aviral"
// console.log(str3.toUpperCase()) // ! "uppercase"
// console.log(str3)
// console.log(str3.toLowerCase()) // ! "lowercase"
// console.log(str3)


// TODO: substring()
// const newString = "aviral-m52"
// console.log(newString.substring(0,4))
// console.log(newString.substring(-6,5))   // ! it simply takes negative index as 0


// TODO: slice() method
// let str4="HelloWorld"
// console.log(str4.slice(0,3)) // ! "slice" method
// console.log(str4.slice(-8, 5))   // ! we can use negative indexes with slice method but not with substring
// console.log("123 "+str4.slice(1,4)+" 456")  


// TODO: String concatenation
// let st1="aaa"
// let st2="bbbb"
// console.log(st1+" % "+st2)   // ! string concatenation

// TODO: Template string
// let age=18
// let name="Aviral"
// let aboutme="my name is "+ name +" and my age is "+age
// console.log(aboutme)

// let aboutme=`my name is ${name} and my age is ${age}`  // ! template string
// console.log(aboutme)


//////////////////////////////////////// TODO: Numbers & Maths /////////////////////////////////////////////

// const balance = new Number(700)
// console.log(balance)

// TODO: toString()
// const value = 400
// const stringVal = value.toString()
// console.log(stringVal, typeof stringVal)


// TODO: toFixed()
// const value = 670
// console.log(value.toFixed(3))


// TODO: toPrecision()
// const otherNumber = 159.8736
// console.log(otherNumber.toPrecision(1))
// console.log(otherNumber.toPrecision(2))
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(4))


// TODO: toLocaleString()
// const hundreds = 1000000
// console.log(hundreds.toLocaleString())   


// TODO: Max & Min values
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)


// TODO: abs(), round(), ceil(), floor(), random()


//////////////////////////////////////// TODO: Date & Time  ////////////////////////////////////////
// let myDate = new Date()
// console.log(typeof myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())  // ✅
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

// let myCreatedDate = new Date(2023, 0, 19)   // ! months in JS starts from 0
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date(2023, 0, 17, 5, 3)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate2 = new Date("11-17-2023")
// console.log(myCreatedDate2.toLocaleString());

// let myTimeStamp = Date.now()
// let myCreatedDate = new Date("01-14-2023")
// console.log(myTimeStamp.toLocaleString())
// console.log(myCreatedDate.getTime())

// let newDate = new Date()
// console.log(newDate.toLocaleString())
// console.log(newDate.getDay())
// console.log(newDate.getMonth())


//////////////////////////////////////// TODO: Conditionals & Loops /////////////////////////////////// 


// TODO: if-else if-else
// let age=17
// if(age>18){
//     console.log("Age is greater than 18")
// }
// else if(age===17){
//     console.log("Number is 17")
// }
// else{
//     console.log("Age is less than 18")
// }

// let num=27
// if(num%2===0){
//     console.log("Odd number")  // ! "%" is used for remainder
// }
// else{
//     console.log("Odd number")
// }


// TODO: Falsy value (False , "" , null , undefined , 0)
// let name=""
// if(name){
//     console.log("hi")
// }
// else{
//     console.log("hello")
// }


// TODO: Ternary Operator
// let age=8
// let drink=age>=5 ? "coffee" : "milk"
// console.log(drink)


// TODO: && operator , || operator
// let age=20
// let name="Aviral"
// if(age===20 && name==="abs"){
//     console.log("True")
// }
// else{
//     console.log("false")
// }

// if(age===20 || name==="abs"){
//     console.log("True")
// }
// else{
//     console.log("false")
// }
// console.log("Hello")


// TODO: Taking user input
// let n=prompt("Enter any number: ")
// console.log(n)


// TODO: Switch case
// let day=8
// switch(day){
//     case 0:
//         console.log("Sunday")
//         break
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     default:
//         console.log("Invalid input")
// }


// TODO: While loop
// let i=0
// while(i<5){
//     console.log(i)
//     i=i+1   // ! "i++" and "i+=1" both can be used 
// }
// console.log(`current value of i is ${i}`)


// TODO: For loop
// for(var j=0;j<5;j++){
//     console.log(j)
// }    // ! variable declared with "var" can be accessed outside
// console.log(`Value of j is ${j}`)
//
// for(let i=0;i<6;i++){
//     console.log(i)
// }
// console.log(i)   // ! variable declared with "let" in loop is not accessible outside the loop

// let i=0
// for(;i<4;i++){
//     console.log(i)
// }


// TODO: Break & Continue 
// for(let i=0;i<10;i++){
//     if(i===4){
//         continue
//     }
//     else if(i===7){
//         break
//     }
//     else{
//         console.log(i)
//     }
// }


// TODO: Do-While loop
// let i=20
// do{
//     console.log(i);
//     i++;
// }while(i<10)


//////////////////////////////////////////// TODO: Arrays ////////////////////////////////////////////////

// let fruits=["apple","mango","grapes", 56, null, undefined]
// console.log(fruits)
// console.log(fruits[1])
// fruits[1]="banana"
// console.log(fruits)

// console.log(typeof fruits)
// let a=10
// console.log(Array.isArray(fruits))  // ! "Array.isArray(name)" is used to check whether the given object is array or not
// console.log(Array.isArray(a))


// TODO: Array Methods (push,pop,shift,unshift)
// let fruits=["apple","mango","banana"]
// console.log(fruits)

// fruits.push("grapes")   // ! push() adds element at last
// console.log(fruits)

// let a=fruits.pop()    // ! pop() removes last element
// console.log(fruits)
// console.log(a) // ! pop() also returns the deleted value

// fruits.unshift("chiku") // ! unshift() adds the element at starting
// console.log(fruits)

// let b=fruits.shift()
// console.log(fruits)  // ! shift() removes the first element also returns it
// console.log(b)

// * push() and pop() are faster than shift() and unshift()


// TODO: include(), indexOf(), join()
// const myArr = [5,1,2,3,9,7,4,6]
// console.log(myArr.includes(8))   // false
// console.log(myArr.indexOf(19));  // -1
// let joinedArr = myArr.join('-')
// console.log(joinedArr, typeof joinedArr);


// TODO: slice(), splice(start, delete, insert)
// let arr1=[1,2,3,4]
// let arr2=arr1.slice(2,7) 
// arr1.push(50)
// console.log(arr1)
// console.log(arr2)

// const arr=['item1','item2','item3','item4','item5'];
// const myarr=arr.splice(1,3);
// console.log(myarr, arr);   // ! splice method also returns the deleted elements in form of array
// ! splice() manipulates the original array, it remove the sliced part from the original array and the sixe of original array decreases
// ! we can also add elements at the place of removed elements with splice method
// const newArr = [5,4,2,6,8]
// let splicedArr = newArr.splice(1,3, 'isnserted-item1', 'inserted-item2')  // ! we have removed 3 elements but inserted only 2 elements
// console.log(splicedArr, newArr)



// TODO: clone array , concat , spread operator 
// let arr1=[1,2,3,4]
// let arr2=arr1.slice(0) // ! we can use slice(0) for cloning
// arr1.push(50)
// console.log(arr1)
// console.log(arr2)

// let arr3=[].concat(arr1)    // ! array is concatenated to a given array
// arr1.push(100)
// console.log("arr1 ", arr1)
// console.log("arr3 ", arr3)

// let arr4=[...arr1]  // ! spread opearator is also used, we can also use it for multiple arrays
// arr1.push(500)
// console.log(arr1)
// console.log(arr4)


// TODO: flat(), from(), of()
// const arrayToBeFlatted = [1, 2, 3, [10,20,30], 4, 5, [40, 50, [100,200,300], 60]]
// let flattenArray = arrayToBeFlatted.flat(Infinity)   // ! in brackets we have to pass the depth up to which we want to flat the array, in the above example depth is 3
// console.log(flattenArray);

// let name = "Aviral"
// console.log(Array.isArray(name));
// let arr = Array.from(name)   // ! from() creates array from single elements
// console.log(arr, typeof arr);

// let score1 = 100
// let score2 = 200
// let score3 = 300
// let ofArray = Array.of(score1, score2, score3)   // ! of() creates array from multiple elements
// console.log(ofArray);


// * create a new array with elements of a exisiting array and some other elements
// let arr5 = [10,20,30]
// let arr6 = arr5.slice(0).concat([100,200])
// let arr7 = [].concat(arr6,[1000,2000])
// console.log("arr6 ",arr6)
// console.log("arr7 ",arr7)

// let ar = [1,2,3]
// let ar2 = [10,20]
// let ar3 = [...ar,ar2]   // ! adding ar2 as single element
// console.log("ar3 ", ar3)
// let ar4 = [...ar,...ar2]  // ! adding ar2 as array
// console.log("ar4 ", ar4)


// * fill (value,start,end)
// const arr = new Array(10).fill(-1)
// console.log(arr)

// const myarr = [1,2,3,4,5,6,7,8,9]
// myarr.fill(0,2,5)
// console.log(myarr)


// TODO: Array destructuring
// const myarr=["val1","val2","val3","val4","val5"]
// let [var1,var2] = myarr
// console.log(var1,var2)
// let [var_a,,var_b] = myarr    // ! we can skip a index by extra ","
// console.log(var_a,var_b)
// let [var_1,var_2,...myNewArray] = myarr    // ! spread operator can not be in middle of destructuring
// console.log(myNewArray)


// TODO: For loop in array
// let fruits=["apple","mango","grapes"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase())
// }
// console.log()
// console.log(fruits[fruits.length-1])


// TODO: for-of & for-in loop 
// const fruits=["apple","mango","banana"]
// for(let a of fruits){
//     console.log(a)
// }
// for(let a in fruits){
//     console.log(`a: ${a}  fruits[a]: ${fruits[a]}`)
// }

//////////////////////////////////////////////////// TODO: Objects ////////////////////////////////////////////
// ! Objects can be created using literal or by using constructor
// TODO: creating object using literals
// * It is also a reference types and have key-value pair
// let sym = Symbol("symbol value")
// const person={
//     name:"Aviral",
//     "full name" : "Aviral Mishra",
//     age : 18,
//     hobbies : ["guitar","sleeping"],  //  * "" are only needed in key names when key name have spaces 
//     isLoggedIn : true,
//     [sym] : 'symbol key value'     // ! to use symbol as key we need to write it in [ ]
// }
// console.log(person.hobbies) // ! value can be accessed by "." operator 
// console.log(person["name"]) // ! key is always written in " " as in JS key is by default in string
// // ! we can not access key names with spaces using '.' operator
// console.log(typeof person['mySym']);
// console.log(person['mySym']);

// person.gender="male"    // ! value can be added by "." operator
// console.log(person)
// person["mobile"]=100    
// console.log(person)

// const key="email"
// person[key]="abc@gmail.com"
// console.log(person)

// person.greeting = function(){
//     console.log("Hello everyone!")
// }
// console.log(person);
// console.log(person.greeting());   // ! greeting method will be called whenever this object is used like any other functions


// TODO: freeze()
// const obj = {
//     name : 'Aviral',
//     age : 20,
// }
// obj['Year'] = 4
// Object.freeze(obj)      // ! freeze() method freezes the object and doesn't allow to add further elements
// console.log(obj);


// TODO: Creating objects using constructors
const user = new Object()
console.log(user);


// TODO: Iteration of objects
const person={
    name:"Aviral",
    course:"B.Tech",
    age:20
}
// for (let a in person){  // ! in array for-in gives index but in objects for-in will give the key
//     console.log(`${a} : ${person[a]}`)
//     console.log(person.a)    // ! This will give undefined as it will check the key with name "a" in person which it will not get 
// }
// console.log(Object.keys(person))    // ! It will return a array of keys of object
// console.log(Object.values(person))
// console.log(Object.entries(person))   // ! 
// console.log(person.hasOwnProperty('names'))
// console.log(Array.isArray(Object.keys(person))) // * to check whether it is an array or not


// TODO: Computed Properties (Adding key-value pairs in object using variables)
// const key1="objkey1"
// const key2="objkey2"
// const val1="value1"
// const val2="value2"
// const obj={
//     key1:val1,
//     key2:val2
// }
// console.log(obj)
// const obj1={
//     [key1]:val1,    // ! name of key is written inside [] to get it from variable
//     [key2]:val2
// }
// console.log(obj1)


// TODO: Creating an object from array
// let arr=['a','b','c','d']
// const obj={}
// for (let i in arr){
//     obj[arr[i]]=i;
// }
// console.log(obj)


// TODO: Spread Operator in array and objects
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr3=[...arr1,...arr2,10,20]
// console.log(arr3)

// const newArr=[..."123456"]  // ! String can be converted to array
// console.log(newArr)

// const obj1={
//     key1:"value1",
//     key2:"value2" 
// }
// const obj2={
//     key1:"value10",
//     key3:"value20",
//     key4:"value30",
// }
// const newobj={...obj1,...obj2,key69:"value69"}
// console.log("newobj: ",newobj)

// const newobject={..."abcdefgh"}
// console.log(newobject)

// const newObject2 = { ...["item1", "item2"] };
// console.log(newObject2)


// TODO: Object Destructuring
// const band={
//     bandName:'Imagine Dragons',
//     song:"Thunder",
//     year:"2013",
//     anothersong:'Believer'
// };
// const {bandName, song}=band;
// console.log(`bandname : ${bandName}   song: ${song}`)

// let {bandName:var1, song:var2, ...rest_of_prop} = band;  // ! we can change the name of key by using ":" after original key name
// console.log(var1, var2, rest_of_prop)


// TODO: Object instide Array
// const users=[
//     {userID:1,name:"Aviral",gender:"male"},
//     {userID:2,name:"nobody",gender:"male"},
//     {userID:3,name:"somebody",gender:"male"}
// ];
// for(let a of users){
//     console.log(a.name);
// }


// TODO: Nested Destructuring
// const users=[
//     {userID:1,name:"Aviral",gender:"male"},
//     {userID:2,name:"nobody",gender:"male"},
//     {userID:3,name:"somebody",gender:"female"}
// ];
// const [user1,user2,user3]=users;
// console.log('user1: ', user1,'  user3: ', user3)

// const [{name},,{gender}] = users; // ! using "{}" for selecting particular key inside an object
// console.log(name,gender)

// const [obj1, obj2] = users
// console.log(obj1, obj2);


// TODO: Function Declaration
// function hello(){
//     console.log("Hello to everyone");
// }
// hello()
// hello()
// hello()

// function sum_two_numbers(num1,num2){
//     return num1+num2;
// }
// console.log(sum_two_numbers(3,8)) // ! if we will not pass any number it will return "Nan" (not a number)

// function iseven(num){
//     return num%2===0;
// } 
// console.log(iseven(24))


// TODO: Function Expressions
// const iseven = function(num){
//     return num%2===0;
// }
// console.log(iseven(152))


// TODO: Arrow Functions
// const iseven =(num) =>{     // ! it is not necessary to use "( )" when passing only single argument 
//     return num%2===0;   
// }
// console.log(iseven(267))

// const sum_three_numbers = (num1,num2,num3) =>{
//     return (num1+num2+num3);
// } 
// console.log(sum_three_numbers(4,9,7));


// TODO: Funciton inside function
// const app = ()=>{
//     const myfunc =()=>{
//         console.log('hello from myfunc');
//     }
//     const addtwo = (num1,num2) =>{
//         console.log(num1+num2);
//     }
//     console.log("inside app");
//     myfunc();
//     addtwo(7,6);
// }
// app();


// TODO: Lexical scope
// {            // ! 'let' and 'const' has "block" scope it means they can't be accessed outside block
//     const name="Aviral";  
//     console.log(name);  
// }
// {
//     const name="Mishra";
//     console.log(name);
// }
// console.log(name)

// {           // ! 'var' has 'funciton' scope it means they can be accessed anywhere
//     var name="Aviral";
//     console.log(name);
// }
// var name="Mishra"
// console.log(name);


// TODO: Default parameters
// const fun = (a,b=5) =>{
//     console.log(a+b);
// }
// fun(7);


// TODO: Rest parameters
// function myfunc(a,b,...c){   // ! all the remaining params will go to the last one with spread operator
//     console.log(a,b,c);
// }
// myfunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total=0;
//     for(let num of numbers){
//         total=total+num;
//     }
//     return total;
// }
// console.log(addAll(1,2,3,4,5));


// TODO: Param destructuring
// const person={
//     name:'Aviral',
//     gender:'male',
//     age:500
// }
// function details(obj){
//     console.log(person.name);
//     console.log(person.gender);
// }
// details(person);

// function Details({name,gender,age}){
//     console.log(name);
//     console.log(gender);
//     console.log(age)
// }       // * this is called param destructuring 
// Details(person);


// TODO: Callback funciton
// function myFunc2(){     // ! callback functions are those that takes a function as input and call it 
//     console.log('inside my func 2');
// }
// function myFunc(Callback){
//     console.log("Hello there I am a function")
//     console.log(Callback);
//     Callback();
// }
// myFunc(myFunc2);


// TODO: Function returning functions
// function myFunc(){
//     function hello(){
//         return 'Hello World';
//     }
//     return hello;
// }
// const ans=myFunc();
// console.log(ans());


// TODO: Imp. Array methods (forEach,map,filter,reduce)

// * forEach 
// const numbers=[4,2,5,8];
// function myFunc(number,index){
//     console.log(`index is ${index} and number is ${number*2}`);
// }       // ! forEach takes callback as input and apply that function to every element of the object 
// numbers.forEach(myFunc);

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} , number is ${number*2}`);
// })

// * Map 
// const numbers=[3,4,6,1,8]
// const square=function(number){
//     return number*number;
// }       // ! map creates a new array and add the returned element to it
// const squareNumber=numbers.map(square);
// console.log(squareNumber);

// const users=[
//     {firstName:'Aviral',age:20},
//     {firstName:'Mayank',age:21},
//     {firstName:'Akhil',age:20},
//     {firstName:'Aakash',age:22},
// ]
// const userName=users.map((user)=>{
//     return user.firstName;
// });
// console.log(userName);

// * filter
// const numbers=[1,3,2,6,7,4,8]

// function isEven(num){
//     return num%2===0;
// }    // ! filter always add the values to the array that return TRUE
// const Even=numbers.filter(isEven)
// console.log(Even);

// const isEven=function (num){
//     return num%2===0;
// }
// const Even=numbers.filter(isEven);
// console.log(Even);

// const isEven=numbers.filter((num)=>{
//     return num%2===0;
// })
// console.log(isEven)

// * reduce
// const numbers=[1,2,3,4,5]
// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })   // ! it returns the single value after performing the desired operation on the object
// console.log(sum);

// const userCart=[
//     {productId:1,productName:'mobile',price:10000},
//     {productId:2,productName:'laptop',price:25000},
//     {productId:3,productName:'tv',price:15000},
// ]
// const totalPrice=userCart.reduce((price,currentValue)=>{
//     return price+currentValue.price
// },0)
// console.log(totalPrice)

// * sort
// const numbers=[5,9,122,40,90,730]
// numbers.sort();     // ! javascript sort the array according to 'ascii' value so it will not sort the numbers as desired 
// console.log(numbers)

// const names=['abc','aviral','harhsit','Acd','aBd'];
// names.sort();
// console.log(names);

        // * sorting according to numbers
// const numbers=[5,9,122,40,90,730];
// numbers.sort((a,b)=>{
//     return a-b;
// })      // ! if 'a-b' is '+' then 'b' will be put first in array and if 'a-b' is '-' then 'a' will be put first
// console.log(numbers);

// const products=[
//     {pID:1,pName:'p1',price:300},
//     {pID:2,pName:'p2',price:3000},
//     {pID:3,pName:'p3',price:200},
//     {pID:4,pName:'p4',price:8000},
//     {pID:5,pName:'p5',price:500},
// ]
// const lowToHigh=products.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// })  // ! for high to low we will do b.price-a.price
// console.log(lowToHigh);

// * find 
// const arr=['hello','cat','dog','lion'];
    // ! "find" checks a particular condition in an array and returns its first occurence only
// function myfunc(str){
//     return str.length===3;
// }
// const ans=arr.find(myfunc);

// const ans=arr.find((str)=>{
//     return str.length===3;
// })

// const ans=arr.find((str)=>str.length===3);

// console.log(ans)

// * every
// const products=[    // ! 'every' method checks every value of the array for a particular condition and returns 'true' if all elements of array satisfies the condition
//     {pID:1,pName:'p1',price:300},
//     {pID:2,pName:'p2',price:3000},
//     {pID:3,pName:'p3',price:200},
//     {pID:4,pName:'p4',price:8000},
//     {pID:5,pName:'p5',price:500},
// ]
// const ans=products.every((prod)=>prod.price<10000);
// console.log(ans);

// * some
// const products=[
//     {pID:1,pName:'p1',price:300},
//     {pID:2,pName:'p2',price:3000},
//     {pID:3,pName:'p3',price:200},
//     {pID:4,pName:'p4',price:8000},
//     {pID:5,pName:'p5',price:500},
// ]   // ! 'some' will return true if any of the element satisfies the conditon
// const ans=products.some((prod)=>prod.price<500);
// console.log(ans);


// TODO: Sets 
// const numbers=new Set([1,2,3,2,2,5]);
// console.log(numbers);

// const char=new Set("aviral");
// console.log(char)
// * add
// const numbers=new Set();
// console.log(numbers);
// numbers.add(10)
// numbers.add(20)
// numbers.add(['item1','item2'])  // ! these two arrays can be added in set as both had different memory address so both are different objects
// numbers.add(['item1','item2'])
// console.log(numbers);

// * has
// if (numbers.has(10)){
//     console.log('10 is present');
// }
// else{
//     console.log('10 is not present');
// }


// TODO: Map 
// const person=new Map();
// person.set('firstName','Aviral');
// person.set('age','20');
// person.set(1,'one');    // ! 'objects' can only have keys of 'string' type but map can have keys of any type
// person.set([1,2,3],'onetwothree');
// person.set({1:'one'},'onetwothree');
// console.log(person);

// console.log(person.get('age'))

// console.log(person.keys())
// for(let a of person.keys()){
//     console.log(a, typeof a);
// }

// for (let [key,value] of person){
//     console.log(key,value);
// }

// const person={
//     id :1,
//     name:'Aviral'
// };
// const extraInfo=new Map()
// extraInfo.set(person,{age:20,gender:'male'});
// console.log(extraInfo.get(person).gender)


// TODO: Clone using Object.assign
// const obj={
//     key1:'value1',
//     key2:'value2'
// };
// const obj2={...obj}
// obj.key3='value3'
// console.log(obj)
// console.log(obj2)
//                         // OR
// const obj2=Object.assign({},obj);
// obj.key3='value3'
// console.log(obj)
// console.log(obj2)


// TODO: Optional chaining
// const user={
//     firstName:'Aviral',
//     address:{houseNumber:'1234'}
// };  // ! '?.' will first check if key exist then it will give its value otherwise gives 'undefined'
// console.log(user?.address?.houseNumber);


// TODO: Create your own methods (THIS keyword)
// function personInfo(){
//     console.log(`person name is ${this.firstName} and his age is ${this.age}`);
// }   // ! 'this' keyword takes the value of the object which calls it
// const person1={
//     firstName:'Aviral',
//     age:19,
//     about:personInfo
// }
// const person2={
//     firstName:'Prakhar',
//     age:20,
//     about:personInfo
// }
// const person3={
//     firstName:'Ayush',
//     age:19,
//     about:personInfo
// }
// person1.about()
// person2.about()

// console.log(this)   // ! this will show 'window' object


// TODO: Call , Apply and Bind methods

// * Call
// function hello(){
//     console.log("Hello World");
// }
// hello.call()

// const user1={
//     firstName:'Aviral',
//     age:20,
//     about:function(hobby){
//         console.log(this.firstName,this.age,hobby);
//     }
// }   // ! we can call a function from another function using 'call' method
// const user2={
//     firstName:'Rachit',
//     age:19
// }
// user1.about.call(user2,'guitar')

// * Apply
// user1.about.apply(user1,['guitar'])
    // ! it is same as "call" but the arguments are passed in array


// * Bind
// const func=user1.about.bind(user1,'casio')
// func();  // ! this method binds the reference of a function with another one


// TODO: Arrow functions and 'this'
// ! arrow doesn't have its own 'this' it takes this from one level above
// const user1={
//     firstName:'aviral',
//     age:20,
//     about: ()=>{
//         console.log(this)
//         console.log(this.firstName,this.age)
//     }
// }   // ! in this case when we call user1 'this' will be taken from one above which is 'window' object
// user1.about()


// TODO: Create functions to create multiple functions
// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }
// const user1=createUser('Aviral','Mishra','aviralm52@gmail.com','20','my address');
// console.log(user1)
// console.log(user1.about())
// console.log(user1.is18())


// TODO: Store methods in different objects
// const userMethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }    // ! We have created a different object with all functions in it
// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.about=userMethods.about;
//     user.is18=userMethods.is18;
//     return user;
// }
// const user1=createUser('Aviral','Mishra','20');
// const user2=createUser('harshit','shukla','21');
// console.log(user1.about());
// console.log(user2.about());


// TODO: Solution using Object.create
// ! the problem in storing methods in different object is that if we add new function to the object then we have to add it agian in the main funciton so we use object.create
// const obj1={
//     key1:'value1',
//     key2:'value2'
// }
// const obj2=Object.create(obj1);
// obj2.key3='value3'  // ! first key2 is searched in obj2 , when not found then it is searched in obj1
// console.log(obj2.key2)


// TODO: Prototype
// function hello(){
//     console.log('hello world');
// }   // ! in javascript function can be treated as function as well as object
// hello();
// ! we can add our own properties 
// hello.myOwnProperty='unique value';
// console.log(hello.myOwnProperty);
// console.log(hello)

// ! prototype is an empty object where we can add our own properties
// if (hello.prototype){
//     console.log('prototype is present');
// }
// else{
//     console.log('prototype is not present');
// }
 

// TODO: Use prototype


// TODO: class keyword 
// class Createuser{
//     constructor(firstName,lastName,email,age,address){
//         console.log('constructor called')
//         this.firstName=firstName
//         this.lastName=lastName
//         this.email=email
//         this.age=age
//         this.address=address
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years old`
//     }
//     is18(){
//         return this.age>=18;
//     }
//     sing(){
//         return 'la la la la';
//     }
// }   // ! class constructor can not be called without new keyword
// const user1=new Createuser('Aviral','mishra','aviralm52@gmail.com',20,'my-address')
// const user2=new Createuser('harshit','vashistha','email@gmail.com',20,'my-address-2')
// console.log(user1.about())
// console.log(user2.is18())
// console.log(user1)


// TODO: class practice and 'extends' keyword
// class Animals{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`
//     }
//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animals{
        // ! this is inheritence
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed=speed;
//     }      // ! super() use the constructor of parent class
//     eat(){
//         return `modified eat`
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}`
//     }
// }   // ! if there are two methods of same name then the method will be first checked in base class then in parent class
// const tommy=new Dog('tommy',3,40);
// console.log(tommy.eat())
// console.log(tommy.isCute())
// console.log(tommy.speed)
// console.log(tommy.run())


// TODO: getters and setters
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         const [firstName,lastName]=fullName.split(' ')
//         this.firstName=firstName;
//         this.lastName=lastName
//     }
// }   // ! if we want to use fullName as an attribute (we can call a function without paranthesis) then we have to use get in front of it
// const person1=new Person('aviral','mishra',20);
// console.log(person1.fullName);
// person1.fullName='harshit vashisth';
// console.log(person1)


// TODO: Static method
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }   // ! static method is accessed with the class name
//     static classInfo(){
//         return `this is person class`
//     }
// }
// const person1=new Person('aviral','mishra',20);
// console.log(Person.classInfo())



                                ////////////////////////////////! !////////////////////////////////////
                               //////////////////////////// ! * PART 2 * ! /////////////////////////// 
                              //////////////////////////////////! !//////////////////////////////////



// * javascript works in two phases one is compilation and another is code execution
// * compilation is done for error detection and scope calculation
// * varibales are created in creation phase before execution, it is called hoisting


//  ! 'hoisting' means the code will be available in 'global execution context' before executing it
// ! 'hoisting' is possible only in case of 'var' and not in 'let'

// console.log(this);
// console.log(firstName);
// var firstName='Aviral';
// console.log(firstName);

// console.log(firstName);
// var firstName='aviral';  // ! variable declared with var can be accessed before but it will give 'undefined'
// console.log(firstName)

// console.log(firstName);
// let firstName='aviral';  // ! variable declared with let cannot be accessed before initialization it will give error
// console.log(firstName)   // ! the time for which the varaible declared with let remains uninitialilzed is known as 'temporal dead zone'

// console.log(myfunc)
// function myfunc(){
//     console.log("Hello World")
// }

// * 'let' and 'const' both are hoisted
// * if anything is not found in local memeory then it will be finded in lexical scope it means where the particular function is present


// TODO: Closures
// function outerFunction(){
//     function innerFunction(){
//         console.log('Aviral Mishra');
//     }
//     return innerFunction;
// }   // !  a function can return function
// const ans=outerFunction();
// console.log(ans)
// ans();

// * when a function is returned from another function it will be returned with variables of the local memory
// * when a outer function returns a inner function then the inner function is returned with the local variables of the outer function


// const square = (num)=>{
//     return num**2;
// }
// console.log(square(4))

// function myFunction(num){
//     return num**2;
// }
 
// const cube= function(num){
//     return num**3
// }
// console.log(cube(4))


// function myFunction(power){
//     return function(number){
//         return number**power;
//     }
// }
// const square=myFunction(2);
// const ans=square(3);
// console.log(ans)
                 //// ! OR ! ////
// const myFunction= (power)=>(number)=>number**power
    // ! this type of code is called lambda code

// function func(){
//     let counter=0;
//     return function (){
//         if(counter<1){
//             console.log('Hi you called me');
//             counter++;
//         }
//         else{
//             console.log('you called me twice');
//         }
//     }
// }
// const myFunc=func();
// myFunc();
// myFunc();
// myFunc();


// TODO: Linking javascript
    //!  1. using script tag at starting - browser will stop parsing the html code as soon as it encounter script tag so the html code that is written after the script tag can not be used in the javascript file and it will give error if it is used 
    // ! 2. using script tag at end - in this case js file will have access to complete html code but the code will wait for parsing 
    // ! 3. using script tag with async - in this case loading of js file and parsing of the html code will continue simultaneously and once the js file is loaded it will start executing the code
    // ! 4. using script tag with defer - in this case loading of js file and parsing will continue simultaneously and when the js file is loaded the code will still wait for parsing and then the execution will be done


// TODO: DOM (Document Object Model)

// * getElementById()
// document.getElementById("id_name") // ! it will return object
// console.log(document.getElementById("id_name"))   // ! to show it structured form
// console.dir(document.getElementById("id_name"))  // ! to show it in raw form


// * querySelector()
// ! query selector is used for selecting anything
// const mainHeading = document.querySelector("#main-heading") // ! for selecting id
// const mainHeading = document.querySelector(".main-heading") // ! for selecting class
// ! if there are multiple classes of same name then it will return the first class and will not check further
// ! if we want to select all classes of same name then we will use
// const mainHeading = document.querySelectorAll(".nav-items") // ! it will return node-list which is similar to array but it is not an array


// * textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);     // ! inner text will return only the part that is visible on screen while textContent will return every text 
// console.log(mainheading.textcontent)
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);   // ! by textContent property we can change text


// * change style of element
// const mainHeading = document.querySelector("div.headline h2");  // ! we can select inert element also
// console.log(mainHeading.style); // ! it is used to set style 
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "20px solid green";


// * get and set attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1)); // ! getattribute() will return attribute of a particular class or id
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));


// * get multiple elements using getElements by class name 
// * get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // ! HTMLCollection(it is an array like object)
// console.log(navItems);
// console.log(Array.isArray(navItems));  // ! it will return false 
// const navItems = document.querySelectorAll(".nav-item"); // ! NodeList
// console.log(navItems[1]);

// * getElementByTagName() it selects the element of a particular tag name 

// TODO: iterate elements
// const navItems=document.getElementsByClassName("nav-items")

// ! in html collection simple for loop and for-of loop can be used only and forEach loop can not be used
// for(let i=0; i< navItems.length; i++){
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// ! html collection can be converted to array by 
// navItems=Array.from(navItems)

// ! in node list forEach all three types of for loops can be used


// TODO: inner html
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>"  // ! this will add the written part to html
// console.log(headline.innerHTML);


// TODO: DOM Tree
// TODO: Traversing DOM tree
// const rootNode=document.getRootNode();   // ! this will return 'document' as it is the root node
// console.log(rootNode)        
// console.log(rootNode.childNodes)    // ! childnode of the root node is 'HTML'
// const htmlElementNode=rootNode.childNodes[0];    // ! we can access it using indexes as childnodes return nodelist
// console.log(htmlElementNode.childNodes);

// console.log(headElementNode.nextSibling)    // ! this will return other siblings of the same parent node

// const h1=document.querySelector('h1')
// console.log(h1.parentNode)  //  ! this will return parent node of the particular element

// * nextSibling can also return white-space so to avoid it we use nextElementSibling

// * to get only child nodes from a node and for ignoring new-line characters we use children method
// const div=document.querySelector(".container")
// console.log(container.children)      // ! children

// * to check how many classes are given to a container
// const section=document.querySelector(".section-todo")
// console.log(section.classList)       // ! classList

// * to add and remove a class
// section.classList.add("bg-dark")
// section.classList.remove("bg-dark")

// * to check wheteher a container contains a particular class
// console.log(sectionTodo.classList.contains("container"))

// ! toggle is used for complement of the action, if the class is present then it will remove it and if not present then it will add it
// sectionTodo.classList.toggle("bg-dark")


// TODO: Add HTML elements using javascript
// const toodoList=document.querySelector(".todo-list")
// toodoList.innerHTML="<li> new todo </li>".       // ! it does not add new code it renders the already written code
// toodoList.innerHTML+="<li> teach students </li>".
 

// TODO: createElement, append, prepend, remove, before, after
// const newItem=document.createElement("li")     // ! createElement
// newItemText=document.createTextNode("tech student")

// const toodoList=document.querySelector(".todo-list") 
// toodoList.append(newItemText)        // ! append
// console.log(newItem)
// * prepend add a child at starting
// toodolist.prepend(newItemText)       // ! prepend

// * remove is used to remove a child 
// const toodo=document.querySelector(".todo-list li")
// toodo.remove()                       // ! remove

// * using before
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const toodoList = document.querySelector(".todo-list");
// toodoList.before(newTodoltem);      // ! before
// toodoList.after(newTodoltem);      // ! after

 
// TODO: insertAdjacentHTML
// elem.insertAdjacentHTML(where,html)
// * beforebegin
// * afterbegin 
// * beforeend
// * afterend
// Example:- todolist.insertAdjacentHTML("afterbegin","<li>teach student</li>")


// TODO: Clone Nodes
// * we can either prepend or append the node, to do both actions we have to clone the node
// const li=document.querySelector(".todo-list")
// li.textContent="new todo"
// const li2= li.cloneNode(true)    // ! true is written for deep cloning without true node will be cloned but without text content
// ul.append(li2)
// ul.prepend(li2)


// TODO: Static list vs Live list
// * queryselectorAll() generated static list which means even after appending elements the size of node list will remain same
// * getElementsbyId() and other get elements method generates live list


// TODO: How to get the dimensions of an element

// * hegiht width
// const sectionTodo=document.querySelector(".section-todo")
// const info= sectionTodo.getBoundingClientRect()     // ! this will return all properties
// const info= sectionTodo.getBoundingClientRect().height     // ! this will return all height
// const info= sectionTodo.getBoundingClientRect().width     // ! this will return all width
// console.log(info)


// TODO: Events
// * events can be added by 3 methods 
// first is by adding it in html:- <button class="btn" onclick="console.log(\"you clicked it\")"></button>
// second is by adding method to class:- btn.onclick= fucntion(){ console.log("click me")}
// third is the most appropriate way by using event listener:- btn.addEventListener("click",()=>{console.log("clicked me")})


// TODO: Click event on multiple buttons
// const allbuttons= document.querySelectorAll(".my-buttons button")
// for (let button of allbuttons){
//     button.addEventListener("click",function(){
//         console.log(this);
//     })
// }

// allbuttons.forEach(function(button){     // * forEach loop can also be used
//     button.addEventListener("click",function(){
//         console.log(this)
//     })
// })


// TODO: Event object
// TODO: Events behind the scenes

// TODO: Practice on call events
// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");
// function randomColorGenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`
//     return randomColor;
// }

// mainButton.addEventListener("click",()=>{
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// })


// TODO: Keypress & mouseover event 
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key)      // ! keypress Event
// })


// mainButton.addEventListener("mouseover",()=>{
//     console.log("mouse over occured!!!")     // ! mouseover
// })

// mainButton.addEventListener("mouseleave",()=>{
//     console.log("mouse leave occured!!!")    // ! mouseleave
// })


// TODO: Event bubbling & Event Capturing

// TODO: Event Delegation







                                ////////////////////////////////! !////////////////////////////////////
                               //////////////////////////// ! * PART 3 * ! /////////////////////////// 
                              //////////////////////////////////! !//////////////////////////////////


// TODO: setTiemout
// * it takes two input one is function and another is the time delay
// console.log("script start")
// function hello(){
//     console.log("hello world");
// }
// setTimeout(hello,5000)
// console.log("script end")


// console.log("script start")
// setTimeout(()=>{
//     console.log("Hello world");
// },0)                                // ! either the setTiemout is 0ms then also it will execute at last
// for (let i=0;i<10;i++) console.log("...")
// console.log("script end")

// * setTimeout returns an Id
// const id=setTimeout(()=>{
//     console.log("....")
// },5000);
// console.log(id)

// * if we dont't want to call setTimeout function then we can clear it
// clearTimeout(id)     // ! if we want to clear setTimeout 
// console.log("script end")


// TODO: setInterval
// console.log("script start")
// setInterval(() => {             // ! setInterval checks the call stack again and again in the given interval and if the call stack is empty then it will add the setInterval function into it
//     console.log("inside set interval");
// }, 1000);       
// console.log("script end");

 
// TODO: Promise
// * creation of promise
// const bucket=['coffee','chips','vegetables','rice','salt']
// const friedRice=new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("fried rice can be prepared")
//     }else{                   // ! Promise is an asynchronous task and executed by browser
//         // reject(new Error("something is missing"))
//         reject("something is missing")
//     }
// })

// * consumption of promise
// friedRice.then((myfriedRice)=>{
//     console.log("lets eat ",myfriedRice)    // ! resolved value will be recieved here
//     },
//     (error)=>{
//         console.log(error)                  // ! rejected value will be recieved here
//     }
// )
                        // ! Promises are added to microtask queue
// * we can also write it as
// friedRice.then( (myfriedRice)=>{
//     console.log("lets eat ",myfriedRice)    
//     }                           // ! .then will execute when we encounter resolve and .catch will be executed on reject
// ).catch( (error)=>{
//     console.log(error)                  
// })

// ! setTimeout() is stored in callback queue after given time interval and promises are stored in microtask queue
// ! if both are present at same time then promise will be executed first as microtask queue has higher priority


// TODO: Function returning a promise
// function ricePromise(){
//     const bucket=['coffee','chips','vegetables','rice','salt']
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//             resolve("fried rice can be prepared")
//         }else{
//             // reject(new Error("something is missing"))
//             reject("something is missing")
//         }
//     })
// }

// ricePromise().then( (myfriedRice)=>{
//     console.log("lets eat ",myfriedRice)    
//     }                           
// ).catch( (error)=>{
//     console.log(error)                  
// })


// TODO: Promise and setTimeout
// function myPromise(){
//     return new Promise( (resolve,reject)=>{
//         const value=true;
//         setTimeout(()=>{
//             if (value) {resolve()}
//             else {reject()}
//         },2000)
//     })
// }

// myPromise()
//         .then( ()=> {console.log("resolved")} )
//         .catch( ()=> {console.log("rejected")} )


// TODO: Promise.resolve and promise chaining
// * .then() returns a promise
// function myPromise(){
//     return new Promise( (resolve,reject)=>{
//         resolve("foo")
//     })
// }
// const returnedValue=myPromise().then( (value)=>{
//     console.log(value)
//     value+="bar";
//     return value
// })
// returnedValue
//     .then( (val)=>{
//         console.log(val)})
//     .catch( ()=>{"nothing"})


// TODO: Callback hell to flat code
// TODO: AJAX Basic Theory
// TODO: XHR (XML HTTP Request)
// const URL ="https://jsonplaceholder.typicode.com/posts"
// const xhr= new XMLHttpRequest();
// // console.log(xhr)
// // console.log(xhr.readyState)

// xhr.open("GET",URL,true)

// // console.log(xhr.readyState)

// xhr.onreadystatechange=function(){      // ! this function will be executed each time the state cheanges
//     console.log(xhr)
//     if (xhr.readyState==4){
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         console.log(typeof data)
//     }
// }

// xhr.onload=function(){      // ! it will only run when ready state will be 4
//     if (xhr.status>=200 && xhr.status<300){
//         console.log(xhr.readyState)
//         const response=xhr.response;
//         const data=JSON.parse(response);

//         // const id=data[7].id             // ! for getting any particular id
//         // console.log(id)
//         // const URL2=`${URL}/${id}`
//         // console.log(URL2)
//         // const xhr2=new XMLHttpRequest();
//         // xhr2.open("GET",URL2)
//         // xhr2.onload=()=>{
//         //     const data2=JSON.parse(xhr2.response)
//         //     console.log(data2)
//         // }
//         // xhr2.send()
//     }
// }

// xhr.onerror=()=>{
//     console.log("something went wrong")     // ! this function is used only when error is occured
// }

// xhr.send()


// TODO: XHR using Promises
// TODO: Fetch API
// const URL ="https://jsonplaceholder.typicode.com/posts"

// fetch(URL)
//     .then( (val)=>{
//         if (val.ok){
//             return val.json()
//         }else{
//             throw new Error("Something went wrong")
//         }
//     })                  // ! execution will come under catch only when there is network error
//     .then( (val2)=> console.log(val2) )
//     .catch( (error)=> console.log("something went wrong") )


// * Creating a resource
// fetch(URL, {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// TODO: Async and Await
// const URL ="https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){      // ! async return promise
    
// }