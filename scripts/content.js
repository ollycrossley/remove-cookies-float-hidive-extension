let button = document.getElementById("ot-sdk-btn-floating")

if (button) {
    button.parentNode.removeChild(button)
    console.log("HIDIVE Cookie Remover:\tRemoved successfully!")
} else {
    console.warn("HIDIVE Cookie Remover:\tCould not find Cookie Button...")
}