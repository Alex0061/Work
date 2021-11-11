let button =document.getElementById('button');

button.addEventListener('click', function(){
  let billValue = document.getElementById('billAmount').value;
  let tipValue = document.getElementById('tipPreferences').value;
  console.log(billValue);
  console.log(tipValue);
  let tipTotal = document.getElementById('tipAmount').value = billValue * ( tipValue / 100);
  console.log(tipTotal);
})
