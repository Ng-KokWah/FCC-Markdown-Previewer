function load() {
  document.getElementById("preview").innerHTML= marked(document.getElementById("editor").value);
}
function update(value) {
  document.getElementById("preview").innerHTML= marked(value);
}