document.addEventListener("astro:page-load", () => {
  const contactForm = document.querySelector<HTMLFormElement>("#contact-form");
  const submitBtn = document.querySelector<HTMLButtonElement>("#submit-btn");
  const submitText = document.querySelector("#submit-text");
  const submitSpinner = document.querySelector("#submit-spinner");
  const successMessage = document.querySelector("#success-message");

  if (contactForm && submitBtn && submitText && submitSpinner && successMessage) {
    const urlParams = new URLSearchParams(globalThis.location.search);
    const tourParam = urlParams.get("tour");
    const subjectInput = document.querySelector<HTMLInputElement>("#subject");
    if (tourParam && subjectInput) {
      subjectInput.value = `Inquiry about: ${tourParam}`;
    }

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      submitBtn.disabled = true;
      submitText.textContent = "Sending...";
      submitSpinner.classList.remove("hidden");

      const processForm = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1200));

        contactForm.reset();
        submitBtn.disabled = false;
        submitText.textContent = "Submit Inquiry";
        submitSpinner.classList.add("hidden");

        successMessage.classList.remove("hidden");

        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 5000);
      };

      void processForm();
    });
  }
});
