const checkform = () => {
  var submitBtn = document.getElementById("submitbutton");
  var inputs = document.getElementsByTagName("input");

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text" && inputs[i].value == "") {
      submitBtn.disabled = true;
      return false;
    } else {
      submitBtn.disabled = false;
    }
  }
};
