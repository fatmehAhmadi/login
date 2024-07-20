function clearPlaceholder(input) {
  input.placeholder = "";
}
function restorePlaceholder(input) {
  if (!input.value) {
    input.placeholder = "کدملی";
  }
}
function restorePlaceholder2(input) {
  if (!input.value) {
    input.placeholder = "شماره موبایل";
  }
}
