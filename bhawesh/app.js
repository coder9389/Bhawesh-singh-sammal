function convertUnit() {
    const numberInput = document.getElementById(`number-value`);
    const numberString = numberInput.value;
  
    if (numberString === '') {
      alert(`You left blank.Please enter a number.`);
      return;
    }
  
    const number = +numberString;
    if (isNaN(number)) {
      alert(`you did not enter a valid number. please provide a number.`);
      return;
    }
  
    const currentUnitInput = document.getElementById(`current-unit`);
    const currentUnit = currentUnitInput.value;
  
    const newUnitInput = document.getElementById(`new-unit`);
    const newUnit = newUnitInput.value;
  
    let valueMap = {
      'm': 1,
      'cm': 100,
      'in': 39.37,
      'ft': 3.28,
    }
    let inputValue = valueMap[currentUnit];
    let outputValue = valueMap[newUnit];
  
    const result = number * (outputValue / inputValue);
  
    document.getElementById(`answer`).innerHTML = `<div class="bg-orange-300 border-2 border-black w-36 font-bold">${number} ${currentUnit} = ${result} ${newUnit}</div>`;
  }