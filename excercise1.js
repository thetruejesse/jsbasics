var age = 18;

if (age >= 65){
    console.log("You get your income from pension");
}
else if (age < 65 && age >= 18){
    console.log("Each month, you get a salary");
}
else if (age < 18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age is not numerical");
}