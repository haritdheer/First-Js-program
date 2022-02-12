//3 types of functions

//Normal function

//function definition

/*function getReady(){
    console.log(brush);
    console.log(bathing);
    console.log(breakfast);
    console.log(coding);

}
function function_name(param1,param2){
    //do something
}*/

//function invoke
//function name(arg1,arg2);

function add(a,b){
    return a+b;
}
let ans=add(2,6);
console.log(ans);

//Functions are treated as first class citizens in JS
//functions can be returned
//,,,,,,,,,,,as parameters/arguments

function calculator(symbo,a,b){
    if (symbo=='add'){
      return  function add(){
            console.log(a+b);
        }
    }
}
let returnedFunc= calculator('add',2,3)   ;
console.log("returned function is\n"+returnedFunc);

returnedFunc();


//2.Function expression

//lrt vriable name=function(){
    //do something
//}
// name of variable is used to invoke the function
//variable_name();

let sayHi=function(){
    console.log("hello guys i m a function expression");

}
console.log("line 57\n"+ sayHi);
sayHi();
//abcd():error abcd is not defined