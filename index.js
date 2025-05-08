function searchPage() {
    let searchPage = document.getElementById("search-input").value.trim().toLowerCase();
    let pages = {
        "lipstick": "lipstick.html",
        "powder": "powder.html",
        "foundation": "foundation.html",
    };


    if (pages[searchPage]) {
        window.location.href = pages[searchPage]; // Redirect to the appropriate page
    } else {
        alert("Page not found! Try searching for 'foundation', 'lipstick', or 'powder'.");
    }
    document.getElementById("paymentForm").addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("paymentForm").classList.add("hidden");
        document.getElementById("confirmation").classList.remove("hidden");
    }
)
// }

// document.getElementById("search-input").addEventListener("keypress", function(event) {
    // if (event.key === "Enter") {
        // searchPage(); // Execute search when Enter is pressed
    }
// });
// function placeOrder() {
    // alert("Your order has been placed!");
// }
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("paymentForm");
    const confirmation = document.getElementById("confirmation");
    const uploadSection = document.getElementById("uploadSection");
    const receiptUpload = document.getElementById("receiptUpload");
    const submitReceipt = document.getElementById("submitReceipt");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        form.classList.add("hidden");
        confirmation.classList.remove("hidden");
        uploadSection.classList.remove("hidden"); 
    });

    submitReceipt.addEventListener("click", function () {
        if (receiptUpload.files.length === 0) {
            alert("Please upload a receipt before submitting.");
         } else {
            alert("Receipt upload successfully!");
         }
    });
});

    // const confirmation = document.getElementById("confirmationMessage");

    // if(name === "" || email === "" || phone === "" || quantity === "") {
        // alert("Please fill all the fields!");
    // } else {
        // confirmation.innerHTML = "Thank you!" + name + "! Your order for" + quantity + "" + product + "(s) has been successfully placed. We will contact you shortly!";
    // }

