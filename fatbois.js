var kilogramInput = document.getElementById("kilograms");
var poundInput = document.getElementById("pounds");
var conversionValue = 2.2046226218;

kilogramInput.addEventListener("input", () => {
  var poundConversion = kilogramInput.value * conversionValue;
  poundInput.value = poundConversion.toFixed(2);
});

poundInput.addEventListener("input", () => {
  var kilogramConversion = poundInput.value / conversionValue;
  kilogramInput.value = kilogramConversion.toFixed(2);
});
