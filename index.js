function searchPage() {
    let searchPage = document.getElementById("search-input").value.trim().toLowerCase();
    let pages = {
        "lipstick": "lipstick.html",
        "powder": "powder.html",
        "foundation": "foundation.html",
    };

    if (!searchPage.endsWith(".html")) {
        searchPage = searchPage + ".html";
    }

    // Check if the page exists in the "pages" object or just assume the .html version
    if (pages[searchPage.replace(".html", "")]) {
        window.location.href = searchPage;
    } else {
        alert("Page not found! Try searching for 'foundation', 'lipstick', or 'powder'.");
    }
}

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchPage();
    }
});


