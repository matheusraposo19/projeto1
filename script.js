function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    // se tiver light mode, adicionar a imagem light
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
  // se tiver sem light mode, mater a imagem normal
}
