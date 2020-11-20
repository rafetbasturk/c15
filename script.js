function toggleTheme() {
    let dot = document.getElementById("dot");
    let text = document.getElementById("toggle-text");

    if (dot.style.float == "right"){
        dot.style.float = "left";
    } else{
        dot.style.float = "right";
    };

    if (text.innerText == "Dark Mode"){
        text.innerText = "Light Mode";
    } else {
        text.innerText = "Dark Mode";
    }

    if (document.documentElement.className === "theme-dark") {
        document.documentElement.className = "theme-light";
    } else {
        document.documentElement.className = "theme-dark";
    };
};