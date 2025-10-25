import type test = require("./our-types");
import type ourTypes = require("./our-types");

console.log("Chandima");
console.log("Wijerathna");
console.log("--------------------------------------------------------------");

const a: string = "Kumara";
console.log(a);
console.log("--------------------------------------------------------------");

let fname: string = "Chandima";
let lname: string = "Wijerathna";
let fullname: string = `Chandima Wijerathna chandima`;

fname = "Sajith chandima wijerathna";

console.log(fname, lname, fullname);
console.log("--------------------------------------------------------------");

let userrole: ourTypes.usertype;

userrole = "editer";
console.log(userrole);
console.log("--------------------------------------------------------------");

let testvar: test.test;

testvar = "chandima";
console.log(testvar);

testvar = 500;
console.log(testvar);

testvar = true;
console.log(testvar);
console.log("--------------------------------------------------------------");

const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const namearray = ["kamal", "Nimal", "Upul"];
const arraytype1: (string | number)[] = ["aaa", "bbb", "ccc", "ddd", 555];
const arraytype2: number[] | (number | string)[] = ["ddd", 888, "ttt", "ggg"];
namearray[2] = "shehana";
console.log(numarray);
console.log(namearray);
console.log(arraytype1);
console.log(arraytype2);
console.log("--------------------------------------------------------------");

const myobj: {
  name1: string;
  name2: string;
  name3: string;
  name4: string;
} = {
  name1: "Chandima",
  name2: "Wijerathna",
  name3: "Sajith",
  name4: "Mudiyanselage",
};

myobj.name1 = "kamal";

console.log(myobj);
console.log(myobj.name1);
console.log(myobj.name2);
console.log(myobj.name3);
console.log(myobj.name4);

interface Imyobj {
  name5: string;
  name6: string;
  name7: string;
}

const myobj1: Imyobj = {
  name5: "chandima",
  name6: "wijerathna",
  name7: "sajith",
};

console.log(myobj1);
console.log(myobj1.name5);
console.log(myobj1.name6);
console.log(myobj1.name7);
