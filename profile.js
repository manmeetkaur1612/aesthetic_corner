// profile.js

// Select elements
const profilePictureUpload = document.getElementById("profilePictureUpload");
const profileImg = document.getElementById("profileImg");
const bioInput = document.getElementById("bioInput");
const imageUpload = document.getElementById("imageUpload");
const captionInput = document.getElementById("captionInput");
const uploadButton = document.getElementById("uploadButton");
const imageGallery = document.getElementById("imageGallery");

// Function to display the uploaded profile picture
profilePictureUpload.addEventListener("change", () => {
    const files = profilePictureUpload.files;
    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (event) {
            profileImg.src = event.target.result;
            profileImg.classList.remove("hidden");
        };
        reader.readAsDataURL(files[0]);
    }
});

// Function to display uploaded images with caption, date, time
function displayImage(file, caption) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const imgCard = document.createElement("div");
        imgCard.classList.add("bg-white", "rounded-lg", "shadow-lg", "overflow-hidden", "relative", "p-4");

        const img = document.createElement("img");
        img.src = event.target.result;
        img.alt = "Uploaded Image";
        img.classList.add("max-w-full", "h-auto");

        const imgInfo = document.createElement("div");
        imgInfo.classList.add("mt-4");

        const imgTitle = document.createElement("h3");
        imgTitle.classList.add("text-lg", "font-semibold");
        imgTitle.innerText = caption;

        const timestamp = document.createElement("p");
        timestamp.classList.add("text-gray-500", "text-sm");
        const now = new Date();
        timestamp.innerText = `Uploaded on: ${now.toLocaleString()}`;

        imgInfo.appendChild(imgTitle);
        imgInfo.appendChild(timestamp);
        imgCard.appendChild(img);
        imgCard.appendChild(imgInfo);
        imageGallery.appendChild(imgCard);
    };

    reader.readAsDataURL(file);
}

// Upload button click event
uploadButton.addEventListener("click", async () => {
    const files = imageUpload.files;
    const caption = captionInput.value;

    if (files.length > 0 && caption) {
        const formData = new FormData();
        formData.append("image", files[0]);
        formData.append("caption", caption);

        try {
            const response = await fetch("http://localhost:5000/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            displayImage(files[0], caption); // Display image on the profile page

            // Clear inputs
            captionInput.value = "";
            imageUpload.value = "";
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    } else {
        alert("Please select an image and enter a caption.");
    }
});

// Fetch and display all images
async function fetchImages() {
    try {
        const response = await fetch("http://localhost:5000/api/images");
        const images = await response.json();
        images.forEach(image => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = "Uploaded Image";
            img.classList.add("max-w-full", "h-auto");
            imageGallery.appendChild(img);
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

// Call the function to fetch images on page load
fetchImages();
