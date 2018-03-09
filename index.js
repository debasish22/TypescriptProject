//types getting started
//string
var myname = "debasish"; // let - Es6 feature
// myname=10; //not supported in typescript as typescript infers name to be string implicitly,
// this was possible in js due to dynamic typing
//---number---
var num = 10.5; //number accepts both integers and floating point numbers
//---boolean(present in js also)---
var angularisClientside = true;
//angularisClientside=0;
//---any---
var age; // when we dont assign any value it takes type as any 
age = "debasish";
age = 10;
//assign types
var myage;
//myage="xxx";
//----Array types------
var myhobbies = ["cook", "play", 1]; // typescript infers it as any myhobbies:any[]
myhobbies = [1]; // so we can assign number ,string etc
myhobbies = ["Hello"];
var myhobbies1 = ["cook", "play"]; // typescript infers it as string myhobbies:string[]
//myhobbies1=[1]; // so we cannot assign number
myhobbies1 = ["Hello"];
//Mentioning the types explicitly for Array
var myhobbies2 = ["cook", "play"]; //
//myhobbies1=[1]; // so we cannot assign number
myhobbies1 = ["Hello"];
//----Tuples--- - when we want an array to contain more then 1 types we can be explicit using tuple
// values must be in order
var myAddress = ["Sydney", 10];
//let myAddress1:[string,number]=[1,"xxx"] ; //error as order imp 
//---enum---
var color;
(function (color) {
    color[color["blue"] = 0] = "blue";
    color[color["yellow"] = 1] = "yellow";
    color[color["red"] = 2] = "red";
})(color || (color = {}));
// behind the scenes integer values are assigned for these enums
var mycolor = color.yellow;
console.log(mycolor);
