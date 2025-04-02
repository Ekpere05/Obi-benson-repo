function searchPage() {
    let searchPage = document.getElementById("search-input").value.trim().toLowerCase();
    let pages = {
        "lipstick": "lipstick.html",
        "powder": "powder.html",
        "foundation": "foundation.html",
    };

    // Directly check if the search term matches any key in pages (case insensitive)
    if (pages[searchPage]) {
        window.location.href = pages[searchPage]; // Redirect to the appropriate page
    } else {
        alert("Page not found! Try searching for 'foundation', 'lipstick', or 'powder'.");
    }
}

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchPage(); // Execute search when Enter is pressed
    }
});
