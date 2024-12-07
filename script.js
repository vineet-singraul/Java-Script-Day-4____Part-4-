function pos_nev()
{
    let number = prompt("Enter a number:");
number1 = number

if (isNaN(number)) {
    alert("Please enter a valid number.");
} else if (number1 > 0) {
    alert("The number is positive.");
} else if (number1 < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

}

pos_nev()