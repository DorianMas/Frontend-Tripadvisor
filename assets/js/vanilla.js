document.addEventListener("DOMContentLoaded", () => {
  console.log("ok");

  const openModal = document.getElementById("connexion");

  // Ouvrir le modal relatif au formulaire de contact

  openModal.addEventListener("click", () => {
    document.getElementById("modal").classList.add("display");
  });

  // Fermer le modal relatif au formulaire de contact

  const closeModal = document.getElementById("closeButton");
  closeModal.addEventListener("click", () => {
    document.getElementById("modal").classList.remove("display");
  });

  // Déclencher l'envoi des informations ajoutées dans le formulaire de contact
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        description: document.querySelector("#description").value,
      };
      console.log(data);

      try {
        // const response = await axios.post(
        //   "https://formulaire-backend-test--trip.herokuapp.com/",
        //   data
        // );
        const response = await axios.post(
          // "https://formulaire-backend-test--trip.herokuapp.com/"
          // "https://tripadvisor-backend-test.herokuapp.com/form",
          // "http://localhost:4000/form",
          "https://tripadvisor-backend-test.herokuapp.com/form",
          data
        );
        alert("Le formulaire a bien été envoyé !");
        console.log(response.data);
      } catch (error) {
        alert("Le formulaire n'a pas pu être envoyé !");
      }
    });
});
