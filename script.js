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
// let sname="Aviral" // !using "let" instead of "var"
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
// str2.trim()     // ! "trim" method
// console.log(str2)
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

// * primitive type 
// let num1=6
// let num2=num1
// console.log("value of num1 is",num1)
// console.log("value of num2 is",num2)
// num1++   // ! value changes only in one
// console.log("value of num1 is",num1)
// console.log("value of num2 is",num2)

// * reference type
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
// * It is also a refence types and have key-value pair
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
//     // console.log(a+":"+person[a])
//     console.log(`${a} : ${person[a]}`)
//     // console.log(person.a)    // ! This will give undefined as it will check the key with name "a" in person which it will not get 
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