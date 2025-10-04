// HTML elements
const calculateBtn = document.getElementById("btnCalculate");
const txtAge = document.getElementById("txtAge");
const txtWeight = document.getElementById("txtWeight");
const txtHeight = document.getElementById("txtHeight");
const results = document.getElementById("results");

// Adding function to Button
calculateBtn.addEventListener("click",calculateTBM);

// Function TBM
function calculateTBM(){

  const sex_selected = document.querySelector('input[name="sex"]:checked').value;

  let age = txtAge.value;
  let weight = txtWeight.value;
  let height = txtHeight.value;

  let BMR;

  if (sex_selected === "man") {
    BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else if (sex_selected === "woman") {
    BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  console.log('Sex selected: ', sex_selected);
  console.log('Age: ',age);
  console.log('Weight: ',weight);
  console.log('Height: ',height);
  console.log('BMR: ',BMR);

  final_msg = `BMR = ${BMR}`;
  results.textContent=final_msg;
}