function countCharacters() {
  const input = document.getElementById("textInput").value;
  const trimmed = input.trim();
  const count = trimmed.length;

  document.getElementById("result").textContent = count;
}
