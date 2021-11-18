//initialise the button with the user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});