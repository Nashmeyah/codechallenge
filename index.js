function checkform() {
  var f = document.forms["form"].elements;
  var cansubmit = true;

  if (cansubmit) {
    document.getElementById("submitbutton").disabled = false;
  }
}
