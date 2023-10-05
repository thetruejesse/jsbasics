// a function that takes arrays and prints out they value

function listFoods(arr)
{
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] == "Burgers")
        {
            console.log(i, "cheeze");
        }
        else{
            console.log(i, arr[i]);
        }
        
    }
}

var foods = ["Tomatoes", "Pizza", "Burgers", "Crocodiles"];

listFoods(foods);