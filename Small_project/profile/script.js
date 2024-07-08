document.addEventListener("DOMContentLoaded", function() {
  const allLinks = document.querySelectorAll(".tabs a");
  const allTabs = document.querySelectorAll(".tab-content");

  allLinks.forEach((elem) => {
    elem.addEventListener("click", function () {
      const linkId = elem.id;
      const hrefLinkClick = elem.href;

      allLinks.forEach((link) => {
        if (link.href == hrefLinkClick) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      allTabs.forEach((tab) => {
        const id = tab.id;
        if (id.includes(linkId)) {
          tab.classList.add("tab-content--active");
        } else {
          tab.classList.remove("tab-content--active");
        }
      });

      // Update URL to match the clicked tab
      history.pushState(null, null, hrefLinkClick);
    });
  });

  // Initialize: Add 'active' class to the first tab link and 'tab-content--active' class to its corresponding tab content
  allLinks[0].classList.add("active");
  allTabs[0].classList.add("tab-content--active");

  // Update URL to match the first tab
  history.replaceState(null, null, allLinks[0].href);
});
