let sum = [];

const deal = () => {
    let randNum = Math.floor(Math.random() * 11) + 1;
    sum.push(randNum);
    let newTotal = sum.reduce((a, b) => a + b, 0);

    if (newTotal > 21) {   
        var para = document.createElement("P");
        para.innerText = newTotal + " You Lost";
        document.getElementById('myDIV').appendChild(para);
        document.querySelector('random-number').removeEventListener("click", deal);
    }
    
    document.getElementById("card").innerHTML += randNum;
    document.getElementById("sum").innerHTML = newTotal;
}

document.querySelector('random-number').addEventListener("click", deal);

