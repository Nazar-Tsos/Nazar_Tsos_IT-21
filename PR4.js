const search = document.getElementById("search");
const list = document.getElementById("list");
const emptyMsg = document.getElementById("emptyMsg");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  let visible = 0;

  Array.from(list.children).forEach(li => {
    if (li.textContent.toLowerCase().includes(value)) {
      li.style.display = "";
      visible++;
    } else {
      li.style.display = "none";
    }
  });

  emptyMsg.textContent = visible === 0 ? "Нічого не знайдено" : "";
});

document.getElementById("sortAlpha").onclick = () => {
  const items = Array.from(list.children);

  items.sort((a, b) => a.textContent.localeCompare(b.textContent));

  list.innerHTML = "";
  items.forEach(item => list.appendChild(item));
};