const copyTrigger = document.querySelector("[data-copy-link]");
const copyFeedback = document.querySelector("[data-copy-feedback]");

if (copyTrigger && copyFeedback) {
  copyTrigger.addEventListener("click", async () => {
    const targetUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(targetUrl);
      copyTrigger.classList.add("is-success");
      copyTrigger.textContent = "Link copied";
      copyFeedback.textContent = "The current event page URL is now in your clipboard.";
    } catch (error) {
      copyFeedback.textContent = "Clipboard access is unavailable here. Copy the URL from your browser bar instead.";
    }

    window.setTimeout(() => {
      copyTrigger.classList.remove("is-success");
      copyTrigger.textContent = "Copy page link";
    }, 2200);
  });
}
