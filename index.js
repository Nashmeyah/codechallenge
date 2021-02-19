function checkform() {
  var f = document.forms["form"].elements;
  var cansubmit = true;

  document.getElementById("submit").disabled = !cansubmit;
}
