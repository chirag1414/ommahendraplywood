document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("review-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user inputs
        let name = document.getElementById("name").value.trim();
        let rating = document.getElementById("rating").value;
        let comment = document.getElementById("comment").value.trim();

        // Validate inputs
        if (name === "" || comment === "" || rating === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Create new review element
        let newReview = document.createElement("div");
        newReview.classList.add("review");
        newReview.innerHTML = `<h3>${name}</h3><p>${"⭐".repeat(rating)}</p><p>"${comment}"</p>`;

        // Append new review to the list
        document.getElementById("new-reviews").appendChild(newReview);

        // Clear form
        document.getElementById("review-form").reset();
    });
});
