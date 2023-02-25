function toggleMode() {
  //usar a tag html
  const html = document.documentElement
  //substituir o background
  html.classList.toggle("light")

  //usar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
   if (html.classList.contains("light")) {
    //se tiver no light mode, adicionar a imagem light
     img.setAttribute("src", "./assets/avatar.png")
   } else {
    //dark mode, manter a imagem normal
     img.setAttribute("src", "./assets/avatar.png")
   }
}