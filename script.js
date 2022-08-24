const voteContent = document.querySelector('.raitingContainer');

voteContent.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList = "raitingNumber") {
        const selected = document.activeElement;
        if (!selected) return;
        const selectedIndex = document.querySelector('.raitingNumber').textContent;
        const span = document.querySelector('.selectedNumber');
        span.textContent = selectedIndex;
        document.querySelector('.raitingNumber').style.backgroundColor = "orange";
    }
});

function replace() {
    document.getElementById("firstContainer").style.display = "none";
    document.getElementById("secondContainer").style.display = "flex";
}