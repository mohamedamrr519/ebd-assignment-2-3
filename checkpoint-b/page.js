import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");
  container.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("tile");
    li.textContent = `${item.name} - ${item.price} EGP`;
    container.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.category === "electronics");
}

export function start() {
  renderItems(items);

  document.querySelector("#show-some").addEventListener("click", () => {
    renderItems(matching());
  });
}