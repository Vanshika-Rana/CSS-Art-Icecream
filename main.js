const art = document.querySelector(".cup");
const blush = document.querySelector(".blush");

art.addEventListener("mouseover", () => {
    blush.style.display = "block";
    
});

art.addEventListener("mouseout", () => {
    blush.style.display = "none";
})