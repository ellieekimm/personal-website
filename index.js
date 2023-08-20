const firstItem = document.getElementById("firstItemText");

const work = document.getElementById("work");
work.addEventListener("click", function(){
    firstItem.scrollIntoView({ behavior: "smooth" });
})
