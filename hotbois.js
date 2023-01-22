//Tempature inputs
var celsiusInput = document.getElementById("celsius");
var fahrenheitInput = document.getElementById("fahrenheit");

// Measurements inputs
var centimeterInput = document.getElementById("centimeters");
var feetInput = document.getElementById("feet");
var inchesInput = document.getElementById("inches");

//Tempature listeners
celsiusInput.addEventListener("input", () => {
  var celsiusConversion = (parseFloat(celsiusInput.value)  * 9/5) + 32;
  fahrenheitInput.value = celsiusConversion.toFixed(1);
});

fahrenheitInput.addEventListener("input", () => {
  var fahrenheitConversion = (parseFloat(fahrenheitInput.value) - 32) * 5/9;
  celsiusInput.value = fahrenheitConversion.toFixed(1);
});

//Measurement listeners
centimeterInput.addEventListener("input", () => {
  var centimeterConversion = parseFloat(centimeterInput.value) / 30.48;
  var stringToSplit = centimeterConversion.toString().split(".");
  if(centimeterConversion.toFixed(1) % 1 != 0) {
    var feetSplit = stringToSplit[0];
    var inchesSplit = parseFloat(("0." + stringToSplit[1])) * 12;

    feetInput.value = feetSplit;
    inchesInput.value = inchesSplit.toFixed(1);
  }
});

feetInput.addEventListener("input", () => {
  var metricConversion;
  if(inchesInput.value == 0) {
    metricConversion = parseFloat(feetInput.value) * 30.48;
  } else {
    metricConversion = (parseFloat(feetInput.value) * 30.48) + (parseFloat(inchesInput.value) * 2.54);
  }

  centimeterInput.value = metricConversion.toFixed(2);
});

inchesInput.addEventListener("input", () => {
  var metricConversion;
  if(feetInput.value == 0) {
    metricConversion = parseFloat(inchesInput.value) * 2.54;
  } else {
    metricConversion = (parseFloat(feetInput.value) * 30.48) + (parseFloat(inchesInput.value) * 2.54);
  }

  centimeterInput.value = metricConversion.toFixed(2);
})
