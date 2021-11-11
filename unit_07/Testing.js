let button =document.getElementById('button');

button.addEventListener('click', function(){
  let billAmount = document.getElementById('billAmount').value;
  let tipAmount = document.getElementById('tipPreferences').value;
  console.log(billAmount);
  console.log(tipAmount);
  let tipTotal = document.getElementById('tipAmount').value = billAmount / tipAmount;
  console.log(tipTotal);
})
