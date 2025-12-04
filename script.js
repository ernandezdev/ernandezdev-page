lucide.createIcons();

function openLink(url) {
  window.open(url, "_blank");
}

function sendEmail() {
  const a = document.createElement("a");
  a.href = "mailto:ernandez.d.medeiros@gmail.com?subject=Contato%20via%20site";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function openCurriculo() {
  // Opens a new tab with the address of the resume page.
  window.open("curriculo.html", "_blank");
}
