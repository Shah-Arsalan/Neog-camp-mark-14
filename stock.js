var initialPrice = document.querySelector("#initial-price");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#check");
var outputDiv = document.querySelector("#output")

button.addEventListener("click", calculate);

function calculate(){
    var costPrice = (initialPrice.value *Quantity.value);
    var sellingPrice = (currentPrice.value *Quantity.value);
    //console.log(costPrice);
    //console.log(sellingPrice);
    
    if (costPrice < sellingPrice){
        var profit = sellingPrice - costPrice;
        var profitPercentage = (profit/costPrice)*100;
        //console.log(profit.value)
        outputDiv.innerText = "It's a profit of "+ profit + " and the profit percentage is " + profitPercentage + " percent";
    }
    else if(costPrice > sellingPrice){
        var loss =  costPrice - sellingPrice ;
        var lossPercentage = (loss/costPrice)*100;
        //console.log(profit.value)
        outputDiv.innerText = "It's a loss of "+ loss + " and the loss percentage is " + lossPercentage + " percent.";
    }
    else{
        outputDiv.innerText = "The Stock's value has remained the same . No loss or profit"
    }
}