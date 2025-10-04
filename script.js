// HTML elements
const calculateBtn = document.getElementById("btnCalculate");

// Adding function to Button
calculateBtn.addEventListener("click",calculateTBM);

// Function TBM
function calculateTBM(){

  console.log("button clicked");
  const sex_selected = document.querySelector('input[name="sex"]:checked').value;
  console.log('Sex selected', sex_selected);
}