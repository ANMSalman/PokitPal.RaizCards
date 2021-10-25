window.ScrollHorizontal = (elmId) => {
    var scrollContainer  = document.getElementById(elmId);

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}