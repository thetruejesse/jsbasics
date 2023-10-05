// create a function that takes an array as input

function myNumbers(arr)
{
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 == 0) 
        {
            console.log(i, arr[i], "Even Number");
        }
        else{
            console.log(i, arr[i], "odd number");
        }
    }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myNumbers(numbers);