const select = document.getElementById("#dropdown");
function resizeSelect() {
    const temp = document.createElement("span");
    temp.style.visibility = "hidden";
    temp.style.position = "fixed";
    temp.style.whiteSpace = "nowrap";
    temp.textContent = select.options[select.selectedIndex].text;
    document.body.appendChild(temp);
    select.style.width = temp.offsetWidth + 40 + "px"; // extra 40px for arrow padding
    document.body.removeChild(temp);
}
select.addEventListener("change", resizeSelect);
resizeSelect();
