import type test = require("./our-types");
import type ourTypes = require("./our-types");

console.log('Chandima');
console.log('Wijerathna');
console.log("--------------------------------------------------------------");

const a:string = 'Kumara';
console.log(a);
console.log("--------------------------------------------------------------");

let fname:string = "Chandima";
let lname:string = 'Wijerathna'
let fullname:string = `Chandima Wijerathna chandima`

fname = "Sajith chandima wijerathna";

console.log(fname, lname, fullname);
console.log("--------------------------------------------------------------");


let userrole: ourTypes.usertype;

userrole = "editer"
console.log(userrole);
console.log("--------------------------------------------------------------");


let testvar: test.test;

testvar = "chandima"
console.log(testvar);

testvar = 500
console.log(testvar);

testvar = true
console.log(testvar);


