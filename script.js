function showProjectDetails(title, description, image) {
    document.getElementById('projectTitle').innerText = title;
    document.getElementById('projectImage').src = image;
    document.getElementById('projectDescription').innerText = description;
    document.getElementById('projectDetailsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectDetailsModal').style.display = 'none';
}

// Close modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById('projectDetailsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function rollImage(element) {
    element.style.transform = "rotate(360deg)";
    element.style.animation = "roll 0.5s ease-in-out";
}

function unrollImage(element) {
    element.style.transform = "rotate(0deg)";
    element.style.animation = "none";
}
