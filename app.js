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
        document.getElementById(`color${i}-name`).textContent = color.hex.value;
        i++;
      });
    });
}

const getColorSchemeBtn = document.querySelector("button");

getColorSchemeBtn.addEventListener("click", getSchemes);
