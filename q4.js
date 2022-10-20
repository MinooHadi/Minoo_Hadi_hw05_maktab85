function showNotification({ top, right, html, className = "default" }) {
  let box = document.createElement("div");
  box.className = className;
  box.innerHTML = html;
  box.style.position = "absolute";
  box.style.top = top + "px";
  box.style.right = right + "px";
  document.body.append(box);
}

showNotification({
  top: 10,
  right: 10,
  html: "Hello ",
  className: "welcome",
});
