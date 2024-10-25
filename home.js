// home.js

const imageGallery = document.getElementById("imageGallery");

// Sample images for demonstration purposes
const sampleImages = [
    {
        src: "https://via.placeholder.com/300/FFB6C1/FFFFFF?text=Sample+Image+1",
        caption: "Beautiful sunset",
        date: new Date().toLocaleString(),
    },
    {
        src: "https://via.placeholder.com/300/FF69B4/FFFFFF?text=Sample+Image+2",
        caption: "Aesthetic flowers",
        date: new Date().toLocaleString(),
    },
    {
        src: "https://via.placeholder.com/300/FF1493/FFFFFF?text=Sample+Image+3",
        caption: "Mountain view",
        date: new Date().toLocaleString(),
    },
    // Add more sample images as needed
];

// Function to display images in the gallery
function displayImages() {
    sampleImages.forEach(image => {
        const imgCard = document.createElement("div");
        imgCard.classList.add("bg-white", "rounded-lg", "shadow-lg", "overflow-hidden", "relative", "p-4");

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = "Uploaded Image";
        img.classList.add("max-w-full", "h-auto");

        const imgInfo = document.createElement("div");
        imgInfo.classList.add("mt-4");

        const imgTitle = document.createElement("h3");
        imgTitle.classList.add("text-lg", "font-semibold");
        imgTitle.innerText = image.caption;

        const timestamp = document.createElement("p");
        timestamp.classList.add("text-gray-500", "text-sm");
        timestamp.innerText = `Uploaded on: ${image.date}`;

        imgInfo.appendChild(imgTitle);
        imgInfo.appendChild(timestamp);
        imgCard.appendChild(img);
        imgCard.appendChild(imgInfo);
        imageGallery.appendChild(imgCard);
    });
}

// Call the function to display images
displayImages();
