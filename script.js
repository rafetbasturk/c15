let usedStorage = parseInt(document.getElementById("usage").innerText, 10);
let totalStorage = 1000;
let usagePercentage = ((usedStorage / totalStorage) * 100).toFixed(2) + "%" ;

document.getElementById("inside-bar").style.width = usagePercentage;

let leftSpace = 1000 - usedStorage;

document.getElementById("left-space").firstElementChild.innerText = leftSpace;