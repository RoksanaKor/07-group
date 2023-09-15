
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='ingredients']"),
    closeModalBtn: document.querySelector("[data-modal-close='ingredients']"),
    modal: document.querySelector("[data-modal='ingredients']"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();