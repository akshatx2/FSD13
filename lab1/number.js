const numbr = (a)=>{
    if(a==0)
        return "zero" ;
    else if(a==1)
        return "one" ;
    else if(a==2)
        return "two" ;
    else if(a==3)
        return "three" ;
        else if(a==4)
        console.log(`four`)
    else if(a==5)
        console.log(`five`) ;
    else if(a==6)
        console.log(`six`) ;
    else if(a==7)
        console.log(`seven`) ;
    else if(a==8)
        console.log(`eight`) ;
    else
        console.log(`nine`) ;

}
numbr() ;

//create another function that takes a number and show in words with the help of numbr function that you have created

const rollnum= "0123" ;
const digits = string(rollnum).split("") ;
let inwords = " " ;
digitsforEach((d)=>{
    inwords = inwords+" "+numbr(Number(d)) ;
});
console.log(inwords) ;





















