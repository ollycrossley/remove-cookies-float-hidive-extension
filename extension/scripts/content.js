function handleCookieButton(button) {
    button.parentNode.removeChild(button)
    console.log("HIDIVE Cookie Remover:\tRemoved successfully!")
}

const observer = new MutationObserver(function (mutations, mutationInstance) {
    let button = document.getElementById("ot-sdk-btn-floating")
    if (button) {
        handleCookieButton(button);
        mutationInstance.disconnect();
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});