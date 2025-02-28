document.getElementById('add-money').addEventListener('click', function (event){ 
 event.preventDefault();
 const amount = document.getElementById("amount").value ;
const conbertAmount = parseInt(amount)
const pin = document.getElementById("pin").value;
const conbertPin = parseInt(pin);
const mainBalance = document.getElementById("main-balance").innerText;
const convertMainbalance = parseFloat
(mainBalance)

if(conbertPin ===  1234) {
const sum = convertMainbalance + conbertAmount;
document.getElementById("main-balance").innerText= sum
}
else{
console.log("can not add this numbers")
}
} )