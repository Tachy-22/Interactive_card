window.addEventListener("DOMContentLoaded", use);

function use() {
  //
  var nameVal = document.getElementById("nameInput");
  var buttonClick = document.getElementById("confirm");
  nameVal.addEventListener("input", myFunction);
  buttonClick.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("name_card").innerHTML = nameVal.value;
    //code for validation
    nameVal.addEventListener("input", nameValidation);
    function nameValidation() {
      var a = document.getElementById("nameInput").value;
      var text;
      if (a == "") {
        nameVal.style.borderColor = "red";
        text = "Can't be left empty";
      } else {
        nameVal.style.border = "solid 0.05rem rgb(207, 203, 203)";
        text = "";
      }
      document.getElementById("demo5").innerHTML = text;
    }
  }

  //
  var numVal = document.getElementById("numberInput");
  numVal.addEventListener("input", myFunction2);
  function myFunction2() {
    document.getElementById("number_card").innerHTML = numVal.value;
  }
  // code for validation
  numVal.addEventListener("input", numValidation);
  function numValidation() {
    let x = document.getElementById("numberInput").value;
    let text;
    if (isNaN(x.replace(/ /g, ""))) {
      numVal.style.borderColor = "red";
      text = "Wrong format, numbers only";
    } else if (x < 999999999999) {
      numVal.style.borderColor = "red";
      text = "Wrong format, numbers are not complete";
    } else {
      numVal.style.border = "solid 0.05rem rgb(207, 203, 203)";
      text = "";
    }
    document.getElementById("demo").innerHTML = text;
  }
  //
  var monthVal = document.getElementById("exp_date1");
  monthVal.addEventListener("input", myFunction3);
  function myFunction3() {
    document.getElementById("month_card").innerHTML = monthVal.value;
    //code for validation
    monthVal.addEventListener("input", monthValidation);
    function monthValidation() {
      let y = document.getElementById("exp_date1").value;
      let text;
      if (isNaN(y) || y < 1 || y > 12) {
        monthVal.style.borderColor = "red";
        text = "Not a valid month";
      } else {
        monthVal.style.border = "solid 0.05rem rgb(207, 203, 203)";
        text = "";
      }
      document.getElementById("demo2").innerHTML = text;
    }
  }
  //
  var yearVal = document.getElementById("exp_date2");
  yearVal.addEventListener("input", myFunction4);
  function myFunction4() {
    document.getElementById("year_card").innerHTML = yearVal.value;
    //code validation
    yearVal.addEventListener("input", yearValidation);
    function yearValidation() {
      let z = document.getElementById("exp_date2").value;
      let text;
      if (isNaN(z) || z < 1 || z > 99) {
        yearVal.style.borderColor = "red";
        text = "Not a valid year";
      } else {
        yearVal.style.border = "solid 0.05rem rgb(207, 203, 203)";
        text = "";
      }
      document.getElementById("demo3").innerHTML = text;
    }
  }
  //
  var cvcVal = document.getElementById("cvc");
  cvcVal.addEventListener("input", myFunction5);
  function myFunction5() {
    document.getElementById("cvc_card").innerHTML = cvcVal.value;
    //code for validation
    cvcVal.addEventListener("input", cvcValidation);
    function cvcValidation() {
      let b = document.getElementById("cvc").value;
      let text;
      if (isNaN(b) || b < 99) {
        cvcVal.style.borderColor = "red";
        text = "Wrong format";
      } else {
        cvcVal.style.border = "solid 0.05rem rgb(207, 203, 203)";
        text = "";
      }
      document.getElementById("demo4").innerHTML = text;
    }
  }
  //
  var confirmButton = document.getElementById("confirm");

  confirmButton.addEventListener("click", confirmMessage);
  function confirmMessage() {
    if (
      numVal.value == "" ||
      nameVal.value == "" ||
      monthVal.value == "" ||
      yearVal.value == "" ||
      numVal.style.borderColor == "red"
    ) {
      document.getElementById("form").style.display = "block";
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("demo6").innerHTML = "Kindly fill all areas";
    } else {
      document.getElementById("form").style.display = "none";
      document.getElementById("confirmationMessage").style.display = "flex";
    }
  }

  var confirmButton = document.getElementById("continue");

  confirmButton.addEventListener("click", confirmMessage2);
  function confirmMessage2() {
    document.getElementById("confirmationMessage").style.display = "none";
    document.getElementById("form").style.display = "block";
  }
}
