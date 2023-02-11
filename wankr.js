var howToPlayLink = document.getElementById("howToPlay");
var startWankLink = document.getElementById("startWank");
var fakeTestLink = document.getElementById("fakeTest");
var resultLink = document.getElementById("result");

var testTimerLink = document.getElementById("testTimer");
var seconds = 4;

function startWank() {
  howToPlayLink.style.display = "none";
  fakeTest.style.display = "block";
  var timer = setInterval(function(){
    testTimerLink.innerHTML = seconds;
    seconds--;
    if(seconds < 0){
      showResult();
      clearInterval(timer);
    }
  }, 1000);
};

function showResult() {
  var randomShake = Math.floor(25 + (Math.random() * 25));
  var randomShakeMinute = Math.floor(randomShake * 12);
  fakeTest.style.display = "none";
  result.style.display = "block";
  document.getElementById("shakeResult").innerHTML = "You shook " + randomShake + " times!";
  document.getElementById("shakeResultMinute").innerHTML = "Thats " + randomShakeMinute + " a Minute!";
  document.getElementById("shakeScore").innerHTML = "W.A.N.K.E.R Score: " + Math.floor(Math.random() * 11);
}
