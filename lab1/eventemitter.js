import{EventEmitter}from "node:events" ;
const task = new EventEmitter() ;
const sayHi = (name)=>{
    console.log(`Logged In ${name}`) ;
} ;
const starts = () =>{
    console.log("System started") ;
}
task.once("greet" , starts) ;
task.on("greet" , sayHi) ;//event and method binding
task.on("greet" , (name)=>{
console.log(`${name} starts shopping`)}) ;
task.on("greet" , (name)=>{
console.log(`${name} logged out`)}) ;
task.emit("greet" , "Akshat")//announcement
task.emit("greet" , "Anil")