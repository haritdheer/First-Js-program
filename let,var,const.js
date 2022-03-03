// console.log(x);
// var x = 10;
// let b = 100;
// console.log(b);

// 

function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
var z=outer();
console.log(z + "");
z();