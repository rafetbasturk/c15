function toggleTheme() {
    let dot = document.getElementById("dot");

    if (dot.style.float == "right"){
        dot.style.float = "left";
    } else{
        dot.style.float = "right";
    };

    
    if (document.documentElement.className === "theme-dark") {
        document.documentElement.className = "theme-light";
    } else {
        document.documentElement.className = "theme-dark";
    };
};