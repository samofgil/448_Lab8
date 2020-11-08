function myFunc() {
  var text1 = document.getElementById("1R");
  var text2 = document.getElementById("1G");
  var text3 = document.getElementById("1B");
  var code1="'#" + text1.value + text2.value + text3.value + "'";

  var text12 = document.getElementById("2R");
  var text22 = document.getElementById("2G");
  var text32 = document.getElementById("2B");
  var code2="'#" + text12.value + text22.value + text32.value + "'";

    alert("Border Color Code: " + code1);
    alert("Body Color Code: " + code2);
    body.style.backgroundColor = code2;
    body.style.borderColor = code1;
    
  document.querySelector("#1R").value = "";
  document.querySelector("#1G").value = "";
  document.querySelector("#1B").value = "";
  document.querySelector("#2R").value = "";
  document.querySelector("#2G").value = "";
  document.querySelector("#2B").value = "";

}
