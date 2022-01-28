document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  const openModal = document.getElementById("connexion");

  openModal.addEventListener("click", () => {
    document.getElementById("connexion").classList.add("modal display");
  });

  //   const closeModal = document.getElementsByClassName("fas fa-times");

  //   closeModal.onclick = func() {
  //     modal.style.display = "none";
  //   };
});
