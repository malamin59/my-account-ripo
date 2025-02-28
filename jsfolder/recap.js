document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault()
   const pin =document.getElementById("pin").value;
  const convertetPin = parseInt(pin);
const amount = document.getElementById('amount').value;
const converAmount = parseFloat(amount);
const mainbalance = document.getElementById("main-balance").innerText;
const convertetMainbalance = parseFloat(mainbalance);
if(amount && pin) {
if(convertetPin === 1234)
{
 const sum = convertetMainbalance + converAmount;
document.getElementById("main-balance").innerText = sum
}
else{
    console.log("enter pin")
}
}
else{
    alert("enter valid pin")
}

})