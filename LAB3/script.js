//zad1
var a=10;
var b=20;
let add=a+b;
let sub=b-a;
let mul=a*b;
let div=b/a;
let mod=b%a;
//a)
console.log("add");
console.log("sub");
console.log("wynik mnożenia to:"+mul);
console.log(div);
console.log(mod);
//b)
document.getElementById("addR").
innerHTML=add;

document.getElementById("mulR"). 
innerHTML="Wynik mnożenia to:"
+mul;

//zad2

var s1=3;
var s2=4;
var s3=5;

var p= (s1+s2+s3)/2;

var area=Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));

//a
console.log("Pole trojkata wynosi:"+area);

//b
document.getElementById("areaR").
innerHTML="Pole trojkata o bokach "+s1+","+s2+","+s3+" wynosi: "
+area

//zad3

const num=Math.ceil(Math.random() * 10);
console.log(num);

const gnum = prompt("Podaj liczbe:");

if(num == gnum){
    console.log("Dobra robota!");
    document.getElementById("mathR").
innerHTML="Dobra robota";
}else{
    console.log("ale z cb bambik, nie tafiles")
    document.getElementById("mathR").
innerHTML="ale z cb bambik, nie trafiles";
}

//b wyswietla to wyzej na stronie a nie w konsoli 


//4

const num1= parseFloat(prompt("Podaj pierwsza liczbe:"));
const num2= parseFloat(prompt("Podaj druga liczbe:"));
const num3= parseFloat(prompt("Podaj trzecia liczbe:"));

if(num1 >= num2 && num1 >= num3){
    console.log("Pierwsza liczba jest najwieksza:"+num1)
}else if(num2 >= num1 || num2 >= num3){
    console.log("Druga liczba jest najwieksza:"+num2)
}else {
    console.log("Trzecia liczba jest najwieksza"+num3)
}
