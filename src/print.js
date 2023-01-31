export { headerComp as header };

function headerComp() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  header.setAttribute("class", "header");
  areYouHungry(header);
  menu(header);
  return header;
}

function areYouHungry(ele) {
  const text = document.createElement("h1");
  text.setAttribute("id", "areyouhungry");
  text.setAttribute("class", "areyouhungry");
  text.textContent = "Are You Hungry?";
  return ele.appendChild(text);
}

function menu(ele) {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("class", "menu");
  const eat = document.createElement("div");
  eat.setAttribute("id", "eat");
  eat.setAttribute("class", "eat");
  eat.textContent = "Eat";
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("class", "contact");
  contact.textContent = "Contact";
  const about = document.createElement("div");
  about.setAttribute("id", "about");
  about.setAttribute("class", "about");
  about.textContent = "About";
  eat.tabIndex = "1";
  contact.tabIndex = "2";
  about.tabIndex = "3";
  for (let i of [eat, contact, about]) {
    menu.appendChild(i);
  }
  return ele.appendChild(menu);
}
