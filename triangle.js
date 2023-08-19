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

//  parallelogram

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