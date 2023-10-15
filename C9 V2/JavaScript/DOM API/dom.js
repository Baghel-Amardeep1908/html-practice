const targetList = document.querySelector(
  //'[jscontroller="izfDQc"]',
  '[role="list"]'
);

const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    console.log("Mutation Element", mutationsList);
    if (mutation.type === "childList") {
      //console.log("List or its subtree changed:", mutation);
      elementChanged();
      // Do something in response to changes
    }
  }
});

function elementChanged() {
  const list = document.getElementsByClassName("cxdMu KV1GEc w2jOJ");

  for (let i of list) {
    const uName = i.innerText;
    console.log(uName);
  }
}

const observerConfig = { childList: true, subtree: true };
observer.observe(targetList, observerConfig);
// AE8xFb OrqRRb
//cxdMu KV1GEc w2jOJ
//zWGUib
