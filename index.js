let sum = [];

const deal = () => {
    let randNum = Math.floor(Math.random() * 11) + 1;
    sum.push(randNum);
    let newTotal = sum.reduce((a, b) => a + b, 0);

    if (newTotal === 21 || newTotal === 20 || newTotal === 19) {
        console.log("you won. you hit 21 right on the nose");
        var para = document.createElement("P");
        para.innerText = newTotal + " you won.";
        document.getElementById('myDIV').appendChild(para);
        document.querySelector('random-number').removeEventListener("click", deal);


    } else if (newTotal > 21) {   
        let finalTotal = document.getElementById('sum');
        finalTotal.remove();

        var para = document.createElement("P");
        para.innerText = newTotal + " You Lost";
        document.getElementById('myDIV').appendChild(para);
        document.querySelector('random-number').removeEventListener("click", deal);
    }

    var x = document.createElement("p");
    var t = document.createTextNode(randNum);
    x.appendChild(t);
    document.getElementById("myCards").appendChild(x);

    
    document.getElementById("sum").innerHTML = newTotal;
}

document.querySelector('random-number').addEventListener("click", deal);



