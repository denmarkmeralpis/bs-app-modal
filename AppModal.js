const AppModal = {
  show({ content = "", size = "modal-md", onShow = null } = {}) {
    const existingModal = document.getElementById('appModal');
    if (existingModal) existingModal.remove();

    // add your own template
    const modalHTML = `
      <div class="modal fade" id="appModal" tabindex="-1" data-bs-keyboard="false" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered ${size}">
          <div class="modal-content">
            ${content}
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modalElement = document.getElementById('appModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    if (typeof onShow === "function") {
      modalElement.addEventListener("shown.bs.modal", onShow, { once: true });
    }

    modalElement.addEventListener("hidden.bs.modal", () => {
      modalElement.remove();
    }, { once: true });

    return modal;
  },

  close(id = "appModal") {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) modalInstance.hide();
      modalElement.remove();
    }
  }
};

export { AppModal };
