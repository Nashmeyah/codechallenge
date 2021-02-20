let submitBtn = document.querySelector("submit");
let ssn = document.querySelector("ssn");
let DOB = document.querySelector("DOB");

ssn.addEventListener("keyup", () => {
  if (ssn.value.legnth > 4) submitBtn.disabled = true;
  else submitBtn.disabled = true;
});
