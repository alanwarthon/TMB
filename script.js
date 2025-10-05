// HTML elements
const calculateBtn = document.getElementById("btnCalculate");
const txtAge = document.getElementById("txtAge");
const txtWeight = document.getElementById("txtWeight");
const txtHeight = document.getElementById("txtHeight");
const results = document.getElementById("results");
const levelActivityQuestion = document.getElementById("levelActivityQuestion");
const selector = document.getElementById("options");
const activityDescription = document.getElementById("activityDescription");
const caloriesPerDay = document.getElementById("caloriesPerDay");
const btnLose = document.getElementById("btnLose");
const btnGain = document.getElementById("btnGain");
const msgFinal = document.getElementById("msgFinal");
const kcalneeded = document.getElementById("kcalneeded");

// Adding function to Button
calculateBtn.addEventListener("click",calculateTBM);
btnLose.addEventListener("click", lose);
btnGain.addEventListener("click", gain);

// mapping options
const descriptions = {
  option1: "Little or no exercise (office job, very low physical activity)",
  option2: "Light exercise 1–3 days/week (walking, household chores, easy cycling)",
  option3: "Moderate exercise 3–5 days/week (gym, recreational sports)",
  option4: "Hard exercise 6–7 days/week (demanding training, heavy physical work)",
  option5: "Very hard exercise or intense physical job (double training sessions, athletes, heavy laborers)"
};

const multiplier = {
  option1: 1.2,
  option2: 1.375,
  option3: 1.55,
  option4: 1.725,
  option5: 1.9
  
};
// Adding function to Dropbox
selector.addEventListener("change",updateActivityDescription);

//global variables
let BMR;
let kcalDay;
// Function TBM
function calculateTBM(){

  const sex_selected = document.querySelector('input[name="sex"]:checked').value;

  let age = txtAge.value;
  let weight = txtWeight.value;
  let height = txtHeight.value;

  

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
  levelActivityQuestion.style.visibility = "visible";

 


}

function updateActivityDescription(){

  console.log(selector.value);
  
  kcalDay = multiplier[selector.value]*BMR;

  
  activityDescription.textContent = descriptions[selector.value];
  caloriesPerDay.textContent = kcalDay.toFixed(2) + " Kcal/day";
  msgFinal.textContent="";
  kcalneeded.textContent ="";
}

function gain(){
  msgFinal.textContent="Calories needed to gain weight (+15%): ";
  kcalneeded.textContent = (kcalDay*1.15).toFixed(2) + " kcal/day";

}
function lose(){
  msgFinal.textContent="Calories needed to lose weight (-20%): ";
  kcalneeded.textContent = (kcalDay*0.8).toFixed(2) + " kcal/day";
}