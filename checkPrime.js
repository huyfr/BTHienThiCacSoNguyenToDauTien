function checkPrime(n)
{
    if (n<2)
    {
        return  false;
    }
    else
    {
        for (let i=2; i<n-1; i++)
        {
            if (n % i == 0)
            {
                return  false;
            }
        }
        return true;
    }
}

function listPrime()
{
    let number = parseInt(document.getElementById("input").value);
    let count = 0;
    let i = 2;
    let result = "";

    while (count < number)
    {
        if (checkPrime(i)==true)
        {
            result = result + "&nbsp;" +i;
            count++;
        }
        i++;
    }
    document.getElementById("result").innerHTML = number + " So nguyen to dau tien: " + result;
}

