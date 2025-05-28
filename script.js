document.getElementById("envelope").addEventListener("click", function () {
  document.getElementById("carta").classList.remove("hidden");
});

document.getElementById("fechar").addEventListener("click", function () {
  document.getElementById("carta").classList.add("hidden");
});

