function calculateTriangleArea() {
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  console.log(base);


  const hightField = document.getElementById('triangle-hight');
  const hightValueText = hightField.value;
  const hight = parseFloat(hightValueText);
  console.log(hight);

  const area = 0.5 * base * hight;
  console.log(area);
  // show triangle result

  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;
}


function calculateParagramArea() {
  const base = getInputValue('paragram-base');
  console.log(base)
  const hight = getInputValue('paragram-hight')
  const area = base * hight;
  setElementInnerText('paragram-area', area);

}

function getInputValue(fieldId) {
  const inputValue = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}