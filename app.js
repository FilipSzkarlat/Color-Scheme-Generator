// take the color from the color picker
const colorPicker = document.getElementById("color-picker");
let endpoint = colorPicker.value.slice(1);

colorPicker.addEventListener("change", () => {
  endpoint = colorPicker.value.slice(1);
  return endpoint;
});

// take the mode from the select
const mode = //wybrać mode
  // get the color schemes (do sprawdzenia)
  function getSchemes() {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${endpoint}&mode=${mode}&count=5`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let colorSchemes = data.colors;
        let schemes = document.getElementById("schemes");
        schemes.innerHTML = "";
        colorSchemes.forEach((color) => {
          schemes.innerHTML += `<div class="scheme" style="background-color: ${color.hex.value}"></div>`;
        });
      });
  };
