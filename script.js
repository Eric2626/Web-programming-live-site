
function previewCode() {
  var code = document.getElementById("codeText").textContent;

  if (code === "") {
    document.getElementById("message").textContent =
      "First, load the code using View Code.";
    return;
  }

  var preview = document.getElementById("preview");

  preview.srcdoc = code;
  preview.style.display = "block";

  document.getElementById("message").textContent =
    "Preview of the code below";

  preview.scrollIntoView();
}
