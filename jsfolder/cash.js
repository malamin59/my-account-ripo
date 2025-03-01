document.getElementById("cashout-btn").addEventListener('click', function(event){
    event.preventDefault();
const pin = document.getElementById("Cashout-pin").value;
const convertetPin = parseInt(pin);
const amount = document.getElementById("cashout-amount").value;
const convertetAmount = parseFloat(amount);
const mainBalance = document.getElementById("main-balance").innerText;
const convertetMainValanse = parseFloat(mainBalance);
if(convertetPin === 1234) {
const sum = convertetMainValanse - convertetAmount ;
document.getElementById("main-balance").innerText= sum
}
else{
    alert("enter pin")
}

})