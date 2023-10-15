// let a = 20;
// // a = 10;
// console.log("bbbb", a);
let b=30;
var a=30;

function abc(){
    var a=10;
    let b=10;
    {
    // ?let b=30;
        // var a=30;
        console.log("b inside block of funct",b);
        console.log("a inside block of funct",a);
    }
    console.log("a inside func", a);
    console.log("b inside func", b);
}

// const d;

abc();
console.log("a outside function",a)
console.log("b outside function",b);