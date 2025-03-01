// take the color from the color picker
const colorPicker = document.getElementById("color-picker");
let endpoint = colorPicker.value.slice(1);

colorPicker.addEventListener("change", () => {
  endpoint = colorPicker.value.slice(1);
  return endpoint;
});

// take the mode from the select
const selectedOption = document.getElementById("options");
let mode = selectedOption.value;

selectedOption.addEventListener("change", () => {
  mode = selectedOption.value;
  return mode;
});

// get the color schemes (do sprawdzenia)
function getSchemes() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${endpoint}&mode=${mode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      let i = 1;
      data.colors.forEach((color) => {
        document.getElementById(`color${i}`).style.backgroundColor =
          color.hex.value;
        document
          .getElementById(`color${i}`)
          .setAttribute("data-hex", color.hex.value);
        document.getElementById(`color${i}-name`).textContent = color.hex.value;
        i++;
      });
    });
}

getSchemes();
const getColorSchemeBtn = document.querySelector("button");

getColorSchemeBtn.addEventListener("click", getSchemes);

// copy the color to the clipboard by clicking on the color
const mainElement = document.querySelector("main");
mainElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("color")) {
    const colorValue = e.target.getAttribute("data-hex");
    navigator.clipboard.writeText(colorValue);
    copiedInfo();
  }
});

// copy the color to the clipboard by clicking on the color name
const footerElement = document.querySelector("footer");
footerElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("color-name")) {
    const colorValue = e.target.textContent;
    navigator.clipboard.writeText(colorValue);
    copiedInfo();
  }
});

// showing the copied info
const copiedText = document.querySelector(".copied-text");
function copiedInfo() {
  copiedText.classList.add("show");

  setTimeout(() => {
    copiedText.classList.remove("show");
  }, 1500);
}
