<!-- DARK/LIGHT MODE -->
<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Dark/Light</title>
  </head>
  <body>
    <button class="btn">Toggle</button>
    <h1>Text Test</h1>

    <script src="./script.js"></script>
  </body>
</html>
<!-- HTML END -->
<!-- CSS START -->
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --color-bg-light: rgb(86, 243, 183);
  --color-text-light: rgb(104, 20, 182);
  --color-bg-dark: rgb(6, 48, 32);
  --color-text-dark: rgb(78, 40, 114);
}
body {
  min-height: 100vh;
  background-color: var(--bg);
  transition: 0.3s ease all;
}
h1 {
  color: var(--text);
}
[theme-type="light"] {
  --bg: var(--color-bg-light);
  --text: var(--color-text-light);
}
[theme-type="dark"] {
  --bg: var(--color-bg-dark);
  --text: var(--color-text-dark);
}
<!-- CSS END -->
<!-- JS START -->
const btn = document.querySelector(".btn");
const getRoot = document.querySelector(":root");
const addMode = getRoot.setAttribute("theme-type", "light");
console.log(getRoot);
let mode = true;
btn.addEventListener("click", () => {
  if (mode) {
    getRoot.setAttribute("theme-type", "dark");
  } else {
    getRoot.setAttribute("theme-type", "light");
  }
  mode = !mode;
});
<!-- JS END -->
