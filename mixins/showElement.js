export default {
  mounted() {
    const pageElems = document.querySelectorAll(".show-elem");

    function isInViewport(elem) {
      const rect = elem.getBoundingClientRect();

      return (
        rect.y <= window.innerHeight - window.innerHeight * 0.08 &&
        !(rect.y <= 50)
      );
    }

    function showPageElem() {
      pageElems.forEach((item) => {
        if (isInViewport(item)) {
          if (item.classList.contains("show-elem-bottom")) {
            item.classList.remove("show-elem-bottom");
          } else if (item.classList.contains("show-elem-opp")) {
            item.classList.remove("show-elem-opp");
          }

          setTimeout(() => {
            item.classList.remove("show-elem");
          }, 1000);
        }
      });
    }

    // Events
    window.addEventListener("load", showPageElem);
    window.addEventListener("resize", showPageElem);
    window.addEventListener("scroll", showPageElem);
  },
};
