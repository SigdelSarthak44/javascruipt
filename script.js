// let input=prompt("enter your name")
// document.getElementById('myheading').innerHTML= "Hey there" + " "  + input +"."
// let Address=prompt("What is your Address???") 
// document.getElementById('Address').innerHTML= "You live in" + " " +  Address +"."
// let age=prompt("what is your age")
// document.getElementById('age').innerHTML= "Your Age is" + " " + age + "."

let a = Number(prompt ("enter a:"))
let b = Number(prompt ("enter b:"))
let c = Number(prompt ("enter c:"))
let d = Number(prompt ("enter d:"))
let e = Number(prompt ("enter e:"))

document.write ("sum =", a+b)
document.write ("<br>difference =", a-b)


document.write ("<br>Division=", a/b)
if(a>b){
    document.write("<br>A is grater than B.")
}
else if(a<b){
    document.write("<br>B is grater than A.")
}
else{
document.write("<br>Both of them are equal.")
}

if(c%2==0){
    document.write("<br>It is even number.")
}
else {
    document.write("<br>The numebr is odd.")
}

if(d%2==0){
    document.write("<br>It is even number.")
}
else {
    document.write("<br>The numebr is odd.")
}

if(e%2==0){
    document.write("<br>It is even number.")
}
else {
    document.write("<br>The numebr is odd.")
}

if(a>0){
    document.write("<br> The Number is Positive.")
}
else if (a<0){
    document.write("<br>The number is negative.")
}
else{
    document.write("<br> The number is Zero.")
}

if(e%4===0){
    document.write("<br> It is a leap year")
}
else{
    document.write("<br> It is not a leap year.")
}