// variablen, classen

var variable1;
let variable2;
const variable3 = "asdasd"
const i = 0;
const x = 123.213123;
const abc = null
const undef = undefined

// objekt

const ob = {};
ob.name = "simon"
ob.alter = 31
ob.alter = 21
// HEFLER!!
// ob.haustier = {};
// ob.haustier.name = "hund"
// aber das geht!
ob.haustier = {};
ob.haustier.name = "hund"
ob.haustier.alter = 10
ob.haustier.grues = () => {
    return ob.haustier.name
}
console.log(ob.haustier.grues());

// object Destructuring
let { name, haustier } = ob;
console.log(name);
console.log(haustier);
haustier.name = "katze"
console.log(ob.haustier);
console.log(haustier);

// functionen
let a = 22;
console.log(a);

function foo (g, b, c) {
    // let a = 1
    console.log(b+c)
    return g
}
foo(12, 14, 2)

const bar = (ar, sd, ds) => {
    console.log(sd);
    return ar
}

bar(1, 2, 3)

console.log(a);

// promise async await
// das ist synchron!
const fs = require('fs');
const json = JSON.parse(fs.readFileSync("test.json"))
console.log(json);
const { readFileSync, readFile } = require('fs');
const json2 = JSON.parse(readFileSync("test.json"))
console.log(json2);

// das nicht!
// erste vasriante

// function add(x){
//     let count;
//     for (let index = 0; index < x.lenght; index++) {
//         count += x[index];
//     }
//     return count;
// // }

const futurefunc = () => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
    // ist eigentlich das gleiche
    // myPromise.then((result) => {
        // console.log(result);
    // }).catch((err) => {
        // console.log(err);
    // })
}
// futurefunc()

const futureNeu = async () => {
    const p = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
          // hier könnte alles sein !!!
          // dateizufriff
        }, 300);
        // in unseren fall setTimeout(): https://www.w3schools.com/jsref/met_win_settimeout.asp
    });
    console.log(p);
}

( async () => {
    futureNeu()
})()

class Customer {
    constructor(name, alter) {
        this.name = name
        this.alter = alter
    }

    getName() {
        return this.name;
    }
}

const objrandom = {name: "harry", alter: 12}
console.log(objrandom);

const cust1 = new Customer("Harry", 12)
console.log(cust1);