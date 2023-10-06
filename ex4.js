// nested loop that multiplies 2 numbers

for (i = 0; i < 3; i++)
{
    for (j = 10; j > 0; j--)
    {
        console.log(i + " multiplied by " + j + " equals " + i * j);
    }
}

// nested loop that divides 2 numbers

for (num1 = 10; num1 > 0; num1 = num1-2)
{
    for (num2 = 3; num2 > 0; num2--)
    {
        console.log(num1 + " divided by " + num2 + " equals " + num1 / num2)
    }
}
