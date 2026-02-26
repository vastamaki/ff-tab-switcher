async function switchTab(direction) {
  const tabs = await browser.tabs.query({
    currentWindow: true,
    hidden: false,
  });

  const activeIndex = tabs.findIndex((tab) => tab.active);
  if (activeIndex === -1) return;

  let newIndex;

  if (direction === "previous") {
    newIndex = (activeIndex - 1 + tabs.length) % tabs.length;
  } else {
    newIndex = (activeIndex + 1) % tabs.length;
  }

  await browser.tabs.update(tabs[newIndex].id, { active: true });
}

browser.runtime.onMessage.addListener((message) => {
  if (message.type === "switch-tab") {
    switchTab(message.direction);
  }
});
