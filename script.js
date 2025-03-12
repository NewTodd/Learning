function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      if (el.dataset.lang === lang) {
        if (el.tagName === "A" || el.tagName === "SPAN" || el.tagName === "BUTTON") {
          el.style.display = "inline-block";
        } else {
          el.style.display = "block";
        }
      } else {
        el.style.display = "none";
      }
    });
  }
  