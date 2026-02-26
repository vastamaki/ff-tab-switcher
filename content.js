window.addEventListener(
  "keydown",
  (e) => {
    if (e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        e.stopImmediatePropagation();
        browser.runtime.sendMessage({
          type: "switch-tab",
          direction: "previous",
        });
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        e.stopImmediatePropagation();
        browser.runtime.sendMessage({
          type: "switch-tab",
          direction: "next",
        });
      }
    }
  },
  true,
);
