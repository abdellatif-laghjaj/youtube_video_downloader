//get the theme from local storage
getTheme();

//color palette
const colors = [
  "hsl(345, 80%, 50%)",
  "hsl(100, 80%, 50%)",
  "hsl(200, 80%, 50%)",
  "hsl(227, 66%, 55%)",
  "hsl(26, 80%, 50%)",
  "hsl(44, 90%, 51%)",
  "hsl(280, 100%, 65%)",
  "hsl(480, 100%, 25%)",
  "hsl(180, 100%, 25%)",
];

const colorBtns = document.querySelectorAll(".theme-color");
const darkModeBtn = document.querySelector(".dark-mode-btn");

//change theme to dark
var isDark = false;
darkModeBtn.addEventListener("click", () => {
  if(!isDark) {
    changeTheme("#000");
    isDark = true;
  }else{
    changeTheme(colors[3]);
    isDark = false;
  }
});

//loop through colors array and set each color to a button
for (let i = 0; i < colorBtns.length; i++) {
  colorBtns[i].style.backgroundColor = colors[i];
}

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeTheme(btn.style.backgroundColor);
  });
});

function changeTheme(color) {
  document.documentElement.style.setProperty("--primary-color", color);
  saveTheme(color);
}

//get the theme from local storage
function getTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
  }
}

//save the theme to local storage
function saveTheme(color) {
  localStorage.setItem("theme", color);
}
