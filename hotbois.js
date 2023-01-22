//Tempature inputs
var celsiusInput = document.getElementById("celsius");
var fahrenheitInput = document.getElementById("fahrenheit");

//Tempature listeners
celsiusInput.addEventListener("input", () => {
  var celsiusConversion = (parseFloat(celsiusInput.value)  * 9/5) + 32;
  fahrenheitInput.value = celsiusConversion.toFixed(1);
});

fahrenheitInput.addEventListener("input", () => {
  var fahrenheitConversion = (parseFloat(fahrenheitInput.value) - 32) * 5/9;
  celsiusInput.value = fahrenheitConversion.toFixed(1);
});
