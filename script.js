let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

document.getElementById("nextBtn").addEventListener("click", () => {
    // Hide the current page
    pages[currentPage].classList.remove("active");
    
    // Move to the next page, if it's the last page go to the first
    currentPage = (currentPage + 1) % totalPages;
    
    // Show the next page
    pages[currentPage].classList.add("active");
});
