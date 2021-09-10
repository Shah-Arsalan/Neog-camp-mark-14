var initialPrice = document.querySelector("#initial-price");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#check");
var outputDiv = document.querySelector("#output")

button.addEventListener("click", calculate);



function calculate(){

    if(initialPrice.value ===""){
        alert("Please fill all feilds")
    }else if(Quantity.value === ""){
        alert("Please fill all fields")
    }else if(currentPrice.value === ""){
        alert("Please fill all fields")
    }
else{

    var costPrice = (initialPrice.value *Quantity.value);
    var sellingPrice = (currentPrice.value *Quantity.value);
    //console.log(costPrice);
    //console.log(sellingPrice);
    
    if (costPrice < sellingPrice){
        var profit = sellingPrice - costPrice;
        var profitPercentage = (profit/costPrice)*100;
        //console.log(profit.value)
        outputDiv.innerText = "It's a profit of "+ profit + " and the profit percentage is " + profitPercentage.toFixed(2) + " percent";
        outputDiv.style.color = "green";
    }
    else if(costPrice > sellingPrice){
        var loss =  costPrice - sellingPrice ;
        var lossPercentage = (loss/costPrice)*100;
        //console.log(profit.value)
        outputDiv.innerText = "It's a loss of "+ loss + " and the loss percentage is " + lossPercentage.toFixed(2) + " percent.";
        outputDiv.style.color = "red";
        
    }
    else{
        outputDiv.innerText = "The Stock's value has remained the same . No loss or profit"
    }
}
}