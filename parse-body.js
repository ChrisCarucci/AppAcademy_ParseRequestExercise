// name=Fido&color=black&age=1&description=Hello+World%21


function firstStep(input) {
  // Your code here
  return input.split('&')
}

function secondStep(input) {
  // Your code here
  return input.map(pair => pair.split("="))
}

function thirdStep(input) {
  // Your code here
  return input.map(pair => pair.map(el => el.replaceAll("+", " ")));
}

function fourthStep(input) {
  // Your code here
  return input.map(pair => pair.map(el => decodeURIComponent(el)));
}

function fifthStep(input) {
  // Your code here
  return Object.fromEntries(input)
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};