const searchInput = document.getElementById("degreeSearch");
const degreeItems = document.querySelectorAll("#degreeAccordion .accordion-item");

searchInput.addEventListener("input", function () {
    const search = searchInput.value.toUpperCase();
    degreeItems.forEach(function (item) {
        const letter = item.querySelector(".accordion-button").textContent.trim();

        if (letter.startsWith(search) || search === "") {
            item.style.display = "";
        }
        else {
            item.style.display = "none";
        }
    });
});