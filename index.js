function checkform() {
  var f = document.forms["form"].elements;
  var cansubmit = true;

  for (var i = 0; i < f.length; i++) {
    if (f[i].value.length == 0) cansubmit = false;
  }

  document.getElementById("submitbutton").disabled = !cansubmit;
}
