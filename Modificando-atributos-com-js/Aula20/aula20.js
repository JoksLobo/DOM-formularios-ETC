function changeImage() {
  const imagem = document.getElementById("myImage");
  const currentSrc = imagem.getAttribute("src");

  if (currentSrc === "imagem1.png") {
    imagem.setAttribute("src", "imagem2.png");
  } else {
    imagem.setAttribute("src", "imagem1.png");
  }
}

function changeType() {
  const input = document.getElementsByTagName("input")[0];
  const currentType = input.getAttribute("type");

  switch (currentType) {
    case "text":
      input.setAttribute("type", "number");
      break;

    case "number":
      input.setAttribute("type", "radio");
      break;

    case "radio":
      input.setAttribute("type", "range");
      break;
    default:
      input.setAttribute("type", "text");
  }
}
