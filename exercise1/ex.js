function myFunc() {
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  if (text1.value != text2.value && text1.value.length<8)
    alert("Passwords do not match. Password needs to be at least 8 characters long.");
  else if (text1.value != text2.value)
    alert("Passwords do not match.");
  else if (text1.value.length<8)
    alert("Password needs to be at least 8 characters long.")
  else {
    alert("Good.")
  }
  document.querySelector("#text1").value = "";
  document.querySelector("#text2").value = "";
}
