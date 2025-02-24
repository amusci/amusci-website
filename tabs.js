document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.getElementsByClassName("tab-links");
  var tabContents = document.getElementsByClassName("tab-contents");

  function openTab(tabName) {
    for (let tabLink of tabLinks) {
      tabLink.classList.remove("active-link");
    }

    for (let tabContent of tabContents) {
      tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
  }

  // Attach event listeners
  for (let tabLink of tabLinks) {
    tabLink.addEventListener("click", function () {
      openTab(this.getAttribute("onclick").match(/'([^']+)'/)[1]);
    });
  }
});
