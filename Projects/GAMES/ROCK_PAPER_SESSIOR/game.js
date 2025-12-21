let button=document.querySelector('button');
let rock=document.querySelector('rockimg');
let paper=document.querySelector('paperimg');
let sessior=document.querySelector('sessiorimg');

let choices={"rock":1,"paper ":2,"sessior":3};
let comp=Math.floor(Math.random()*3); //computer chooses the number
let computerchoice={1:"rock",2:"paper",3:"sessior"}
console.log("Your choice",choices);
console.log("Computer choice",comp);