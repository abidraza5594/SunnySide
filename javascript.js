let title = document.getElementById("title");
let arr = ["WE ARE IMAGINATIVE", "WE ARE INNOVATIVE", "WE ARE ARTISTIC", "WE ARE INVENTIVE", "THE TEAM IS INSPIRED"];

let index = 0;

function increaseIndex() {
    title.classList.remove("fade-in"); 
    title.innerHTML = arr[index];
    title.classList.add("fade-in"); 

    if (index === arr.length - 1) {
        index = 0;
    } else {
        index = index + 1;
    }
}

setInterval(() => {
    increaseIndex();
}, 1000);
