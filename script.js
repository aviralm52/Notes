// TODO:
"use strict";


// TODO: printing in console
// console.log("Hello World!");
// console.log(`Hello World!`);
// ! console.log can print something on console


// TODO: variables
// var firstname="Aviral";
// console.log(firstname);
 // ! variable names are case sensitive
// firstname="Mishra"
// console.log(firstname);

// firstname="Aviral"
// console.log(firstname);
 // ! We can create a variable without using var but if we want to avoid creating a variable without "var" keyword then we should write "use strict" on top of file


//TODO: Arithmatic Operations
// var value1=10
// console.log(value1+20)
// console.log(value1-20)
// console.log(value1*2)
// console.log(value1/2)
// console.log(value1/3)
// console.log(value1**2)


// first_name // * snake case writing
// firstname // * camel case writing


// TODO: "var" keyword
// var name="Aviral"
// console.log(name)
// var name="Mishra"
// console.log(name)


// TODO: "let" keyword
// let sname="Aviral" // ! using "let" instead of "var"
// console.log(sname)
// sname="Mishra"
// console.log(sname)
// let sname="Mishra"  // ! In case of "let" again declaring a variable will give an error
// console.log(sname)


// TODO: Constants
//  ! We can create a constant by "const" keyword
// const pi=3.14
// console.log(pi)
// pi=2.22 // ! assignment to constant will give an error


//TODO: Length property
// let str="Aviral"
// console.log(str.length) // ! "length" property
// console.log(str[3])
// console.log(str[-1])
// console.log(str[str.length-1])


// TODO: trim() method
// let str2="  *HelloWorld*  "
// console.log(str2.length)
// str2.trim()     // ! "trim" method removes the extra spaces from the string  
// console.log(str2)    // ! it does not work on same string the returned string has to be saved in another string
// console.log(str2.length)
// str2=str2.trim()
// console.log(str2)
// console.log(str2.length)


// TODO: toUpperCase() & toLowerCase()
// let str3="Aviral"
// console.log(str3.toUpperCase()) // ! "uppercase"
// console.log(str3)
// console.log(str3.toLowerCase()) // ! "lowercase"
// console.log(str3)


// TODO: slice() method
// let str4="HelloWorld"
// console.log(str4.slice(0,3)) // ! "slice" method
// console.log("123 "+str4.slice(1,4)+"456")  


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
// console.log(typeof str


// let a=10
// let b=20
// console.log((a+"")+(b+""))
// let c="10"
// let d="20"
// console.log((+c)+(+d))

//  TODO : String concatenation
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
// console.log(a===b)  // ! "===" checks value as well as datatype

// console.log(a!=b)
// console.log(a!==b)


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
// while(i<10){
//     console.log(i)
//     i=i+1   // ! "i++" and "i+=1" both can be used 
// }
// console.log(`current value of i is ${i}`)


// TODO: For loop
// for(let i=0;i<10;i++){
//     console.log(i)
// }
// console.log(i)   // ! variable declared with "let" in loop is not accessible outside the loop

// for(var j=0;j<10;j++){
//     console.log(j)
// }    // ! variable declared with "var" can be accessed outside
// console.log(`Value of j is ${j}`)

// let i=0
// for(;i<10;i++){
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


// TODO: Arrays
// let fruits=["apple","mango","grapes"]
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


// TODO: clone array , concat , spread operator  
// let arr1=[1,2,3,4]
// let arr2=arr1.slice(0) // ! we can use slice(0) for cloning
// arr1.push(50)
// console.log(arr1)
// console.log(arr2)

// let arr3=[].concat(arr1)    // ! array is concatenated to a given array
// arr1.push(100)
// console.log(arr1)
// console.log(arr3)

// let arr4=[...arr1]  // ! spread opearator is also used
// arr1.push(500)
// console.log(arr1)
// console.log(arr4)

// * create a new array with elements of a exisiting array and some other elements
// let arr5=[10,20,30]
// let arr6=arr5.slice(0).concat([100,200])
// let arr7=[].concat(arr6,[1000,2000])
// console.log(arr6)
// console.log(arr7)

// let ar=[1,2,3]
// let ar2=[10,20]
// let ar3=[...ar,ar2]
// console.log(ar3)
// let ar4=[...ar,...ar2]
// console.log(ar4)


// TODO: For loop in array
// let fruits=["apple","mango","grapes"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase())
// }
// console.log()
// console.log(fruits[fruits.length-1])


// TODO: Const array
// const fruits=["apple","mango","banana"]
// fruits.push("grapes")   // ! it is not giving error beacuse address of array is stored in heap memeory and we are not changing its address
// console.log(fruits)
// ! now on we will use const for reference type


// TODO: for-of & for-in loop 
// const fruits=["apple","mango","banana"]
// for(let a of fruits){
//     console.log(a)
// }
// for(let a in fruits){
//     console.log(a)
//     console.log(fruits[a])
// }


// TODO: Array destructuring
// const myarr=["val1","val2","val3","val4","val5"]
// let [var1,var2]=myarr
// console.log(var1,var2)
// let [var_a,,var_b]=myarr    // ! we can skip a index by extra ","
// console.log(var_a,var_b)
// let [var_1,var_2,...myNewArray]=myarr
// console.log(myNewArray)


// TODO: Objects and "." vs "[]"
// * It is also a reference types and have key-value pair
// const person={
//     name:"Aviral",
//     age:18,
//     hobbies:["guitar","sleeping"]   //  * "" are only needed in key names when key name have spaces 
// }
// console.log(person.hobbies) // ! value can be accessed by "." operator 
// console.log(person["name"]) // ! key is always written in " " as in JS key is by default in string

// person.gender="male"    // ! value can be added by "." operator
// console.log(person)
// person["mobile"]=100    
// console.log(person)

// const key="email"
// person[key]="abc@gmail.com"
// console.log(person)


// TODO: Iteration of objects
// const person={
//     name:"Aviral",
//     course:"B.Tech",
//     age:20
// }
// for (let a in person){  // ! in array for-in gives index but in objects for-in will give the key
//     console.log(a+":"+person[a])
//     console.log(`${a} : ${person[a]}`)
//     console.log(person.a)    // ! This will give undefined as it will check the key with name "a" in person which it will not get 
// }
// console.log(Object.keys(person))    // ! It will return a array of keys of object
// console.log(Object.values(person))
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
//     [key1]:val1,    // ! name of key is written inside [] to get is from variable
//     [key2]:val2
// }
// console.log(obj1)


// TODO: Creating an object from array
// arr=['a','b','c','d']
// const obj={}
// for (i in arr){
//     obj[arr[i]]=i;
// }
// console.log(obj)


// TODO: Spread Operator in array and objects
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr3=[...arr1,...arr2,10,20]
// console.log(arr3)

// const newarr=[..."123456"]  // ! String can be converted to array
// console.log(newarr)

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
// console.log(newobj)

// const newobject={..."abcdefgh"}
// console.log(newobject)

// const newObject2 = { ...["item1", "item2"] };
// console.log(newObject2)


// TODO: Object Destructuring
// const band={
//     bandName:'lad zepline',
//     song:"kesariya",
//     year:"1998",
//     anothersong:'tu aake dekhle'
// };
// const {bandName,song}=band;
// console.log(bandName,song)

// let {bandName:var1,song:var2,...rest_of_prop}=band;  // ! we can change the name of key by using ":" after original key name
// console.log(var1,var2,rest_of_prop)


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
//     {userID:3,name:"somebody",gender:"male"}
// ];
// const [user1,user2,user3]=users;
// console.log(user1,user3)

// const [{name},,{gender}]=users; // ! using "{}" for selecting particular key inside an object
// console.log(name,gender)


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
// const iseven = num =>{     // ! it is not necessary to use "( )" when passing only single argument 
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
// function myFunc2(){     // ! callback functions are those that takes a function as  an input and call it 
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

// * fill (value,start,end)
// const arr=new Array(10).fill(-1)
// console.log(arr)

// const myarr=[1,2,3,4,5,6,7,8,9]
// myarr.fill(0,2,5)
// console.log(myarr)

// * spilce (start,delete,insert)
// const arr=['item1','item2','item3','item4','item5'];
// const myarr=arr.splice(1,2,'inserted item1','inserted item2');
// console.log(arr)    // ! splice method also returns the deleted elements in form of array
// console.log(Array.isArray(myarr))


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
// TODO: Short Syntax


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
// ! the problem in storing methods in different object is that if we add new function to the object then we have to add it agian main funciton so we use object.create
// const obj1={
//     key1:'value1',
//     key2:'value2'
// }
// const obj2=Object.create(obj1);
// obj2.key3='value3'  // ! fir key2 is searched in obj2 , when not found then it is searched in obj1
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

// ! prototype is an empty object where we can add 
// if (hello.prototype){z
//     console.log('prototype is present');
// }
// else{
//     console.log('prototype is not present');
// }
 

// TODO: Use prototype


// TODO: class keyword 
// class Creatuser{
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
// const user1=new Creatuser('Aviral','mishra','aviralm52@gmail.com',20,'my-address')
// const user2=new Creatuser('harshit','vashistha','email@gmail.com',20,'my-address-2')
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
//         // ! this is inheritence
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
// }   // ! if we want to use fullName as a attribute then we have to use get in front of it
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
