document.addEventListener("DOMContentLoaded", () => {
  console.log("ok");

  const openModal = document.getElementById("connexion");

  openModal.addEventListener("click", () => {
    document.getElementById("modal").classList.add("display");
  });

  const closeModal = document.getElementById("closeButton");
  closeModal.addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
});
