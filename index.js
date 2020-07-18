

var customerName = document.getElementById("name");
var cusNameOup = document.getElementById("cusNameOup");
// Amount numbers
var cusAmount = document.getElementById("amount");
var cusOup = document.getElementById("amountOup");
var cusTwoAmount = document.getElementById("amountTwo");
var cusTwoOup = document.getElementById("amountTwoOup");
var cusThreeAmount = document.getElementById("amountThree");
var cusThreeOup = document.getElementById("amountThreeOup");
var cusFourAmount = document.getElementById("amountFour");
var cusFourOup = document.getElementById("amountFourOup");

// Description of goods
var des = document.getElementById("dec");
var desOup = document.getElementById("decOup");
var desTwo = document.getElementById("decTwo");
var desTwoOup = document.getElementById("decTwoOup");
var desThree = document.getElementById("decThree");
var desThreeOup = document.getElementById("decThreeOup");
var desFour = document.getElementById("decFour");
var desFourOup = document.getElementById("decFourOup");
// Total value
var AmountTotal = document.getElementById("total");
// Reset button
var btnTwo = document.getElementById("btnr");
// Invoice button
var invbtn = document.getElementById("invBtn");
// Overlay
var overlay = document.getElementById("overlay");
// Preview Button
var prebtn = document.getElementById("prebtn");
// Serial number or id
var serialnum = document.getElementById("sn");
var serialnumoup = document.getElementById("snOup");
var serialTwonum = document.getElementById("snTwo");
var serialTwonumOup = document.getElementById("snTwoOup");
var serialThreenum = document.getElementById("snThree");
var serialThreenumOup = document.getElementById("snThreeOup");
var serialFournum = document.getElementById("snFour");
var serialFournumOup = document.getElementById("snFourOup");

function closenav(){
  overlay.style.visibility = "hidden";
}


invbtn.addEventListener("click", function (e) {
  overlay.style.visibility = "visible";
});

prebtn.addEventListener("click", (e) =>{

  e.preventDefault();

  cusNameOup.innerHTML = customerName.value;
  // Amount value
  cusOup.innerHTML = cusAmount.value;
  cusTwoOup.innerHTML = cusTwoAmount.value;
  cusThreeOup.innerHTML = cusThreeAmount.value;
  cusFourOup.innerHTML = cusFourAmount.value;
  
  serialnumoup.innerHTML = serialnum.value;
  serialTwonumOup.innerHTML = serialTwonum.value;
  serialThreenumOup.innerHTML = serialThreenum.value;
  serialFournumOup.innerHTML = serialFournum.value;
  // Description values
  desOup.innerHTML = des.value;
  desTwoOup.innerHTML = desTwo.value;
  desFourOup.innerHTML = desFour.value;
  desThreeOup.innerHTML = desTwo.value;
  // total
  AmountTotal.innerHTML = "Total Amount = " + "$" + (cusAmount.value) * (cusTwoAmount.value) * (cusThreeAmount.value) * (cusFourAmount.value);
  AmountTotal.value.join(",");

});

// overlay display should be none when the body is loaded

function hideform(){
  overlay.style.visibility = "hidden";
}
























