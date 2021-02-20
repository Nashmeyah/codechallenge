const checkform = () => {
  let submitBtn = document.getElementById("submitbutton");
  let inputs = document.getElementsByTagName("input");

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text" && inputs[i].value == "") {
      submitBtn.disabled = true;
      return false;
    } else {
      submitBtn.disabled = false;
    }
  }
};
