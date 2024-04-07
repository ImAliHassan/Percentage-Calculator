// Percentage calculator using prompt box
// Name = prompt('Your name here')
// a = prompt("Total Marks Here");
// b = prompt("Obtained Marks Here");
// c = b / a *100;
// alert(`Your Percentage is ${c} %`);
// document.write(`Dear ${Name}Your Percentage is ${c} %`);
// console.log(`Your Percentage is ${c} %`);

function cal() {
  // students obt marks section

let ttl = document.getElementById("ttl1").value;
let obt = document.getElementById("obt1").value;
let res = obt / ttl * 100;
console.log(`Dear  your percentage is ${res}`);
document.getElementById("res1").innerHTML=(` ${res} %`);

}
