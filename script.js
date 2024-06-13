// Body

const body = document.querySelector("body");
body.style.fontFamily = "Poppins";
body.style.backgroundColor = "#171717";
body.style.padding = "0";
body.style.margin = "0";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.display = "flex";
body.style.flexDirection = "column";

// cabeçalho

const header = document.createElement("header");
header.style.width = "100%";
header.style.height = "90px";
header.style.paddingTop = "10px";
header.style.backgroundColor = "#1877F2";
const tituloSite = document.createElement("h1");
tituloSite.textContent = "Calcular Média";
tituloSite.style.color = "white";
tituloSite.style.fontSize = "30px";
tituloSite.style.textAlign = "center";
tituloSite.style.backgroundImage = 'url("assets/calculadora.png")';
tituloSite.style.backgroundSize = "40px";
tituloSite.style.backgroundPosition = "510px";
tituloSite.style.backgroundRepeat = "no-repeat";
header.appendChild(tituloSite);
body.appendChild(header);

// Layout Main

const main = document.createElement("main");
main.style.width = "100%";
main.style.height = "450px";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.paddingTop = "110px";
body.appendChild(main);

// seção única

const section = document.createElement("section");
section.style.width = "450px";
section.style.height = "330px";
section.style.borderRadius = "20px";
section.style.padding = "0 25px";
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.gap = "6px";
section.style.backgroundColor = "#1877F2";
main.appendChild(section);

// titulo calculadora de Média

const tituloCalcualdora = document.createElement("h1");
tituloCalcualdora.textContent = "Calcular Média";
tituloCalcualdora.style.color = "white";
tituloCalcualdora.style.textAlign = "center";
section.appendChild(tituloCalcualdora);

// div flex

const flex = document.createElement("div");
flex.style.display = "flex";
flex.style.width = "450px";
flex.style.height = "250px";
section.appendChild(flex);

// div calculadora
const calculadora = document.createElement("div");
calculadora.style.display = "flex";
calculadora.style.width = "300px";
calculadora.style.height = "250px";
calculadora.style.flexDirection = "column";
flex.appendChild(calculadora);

// Div input nome
const divNome = document.createElement("div");
divNome.style.width = "400px";
divNome.style.height = "80px";
divNome.style.display = "flex";
divNome.style.flexDirection = "column";
divNome.style.paddingLeft = "2px";
calculadora.appendChild(divNome);

// label input nome

const labelNome = document.createElement("label");
labelNome.textContent = "Nome";
labelNome.style.color = "white";
labelNome.style.fontSize = "18px";
labelNome.style.fontWeight = "500";
divNome.appendChild(labelNome);

// input nome
const inputName = document.createElement("input");
inputName.style.width = "210px";
inputName.style.height = "45px";
inputName.style.backgroundColor = "transparent";
inputName.style.border = "solid 2px white";
inputName.style.borderRadius = "10px";
inputName.style.outline = "0";
inputName.style.color = "white";
inputName.style.paddingLeft = "10px";
inputName.style.fontSize = "16px";
divNome.appendChild(inputName);

// Div com as 3 notas
const notas = document.createElement("div");
notas.style.width = "250px";
notas.style.height = "100px";
notas.style.display = "flex";
notas.style.gap = "8px";
calculadora.appendChild(notas);

// div nota 1
const nota1 = document.createElement("div");
nota1.style.width = "70px";
nota1.style.height = "100px";
nota1.style.display = "flex";
nota1.style.alignItems = "center";
nota1.style.flexDirection = "column";
notas.appendChild(nota1);

// div nota 2
const nota2 = document.createElement("div");
nota2.style.width = "70px";
nota2.style.height = "100px";
nota2.style.display = "flex";
nota2.style.alignItems = "center";
nota2.style.flexDirection = "column";
notas.appendChild(nota2);

// div nota 3
const nota3 = document.createElement("div");
nota3.style.width = "70px";
nota3.style.height = "100px";
nota3.style.display = "flex";
nota3.style.alignItems = "center";
nota3.style.flexDirection = "column";
notas.appendChild(nota3);

// label input nota 1

const labelNota1 = document.createElement("label");
labelNota1.textContent = "Nota 1";
labelNota1.style.color = "white";
labelNota1.style.fontSize = "18px";
labelNota1.style.fontWeight = "500";
nota1.appendChild(labelNota1);

// input Nota 1

const inputNota1 = document.createElement("input");
inputNota1.style.width = "50px";
inputNota1.style.height = "45px";
inputNota1.style.backgroundColor = "transparent";
inputNota1.style.border = "solid 2px white";
inputNota1.style.borderRadius = "10px";
inputNota1.style.outline = "0";
inputNota1.style.color = "white";
inputNota1.style.paddingLeft = "10px";
inputNota1.style.fontSize = "16px";
inputNota1.type = "number";
nota1.appendChild(inputNota1);

// label input nota 2

const labelNota2 = document.createElement("label");
labelNota2.textContent = "Nota 2";
labelNota2.style.color = "white";
labelNota2.style.fontSize = "18px";
labelNota2.style.fontWeight = "500";
nota2.appendChild(labelNota2);

// input Nota 2

const inputNota2 = document.createElement("input");
inputNota2.style.width = "50px";
inputNota2.style.height = "45px";
inputNota2.style.backgroundColor = "transparent";
inputNota2.style.border = "solid 2px white";
inputNota2.style.borderRadius = "10px";
inputNota2.style.outline = "0";
inputNota2.style.color = "white";
inputNota2.style.paddingLeft = "10px";
inputNota2.style.fontSize = "16px";
inputNota2.type = "number";

nota2.appendChild(inputNota2);

// label input nota 3

const labelNota3 = document.createElement("label");
labelNota3.textContent = "Nota 3";
labelNota3.style.color = "white";
labelNota3.style.fontSize = "18px";
labelNota3.style.fontWeight = "500";
nota3.appendChild(labelNota3);

// input Nota 3

const inputNota3 = document.createElement("input");
inputNota3.style.width = "50px";
inputNota3.style.height = "45px";
inputNota3.style.backgroundColor = "transparent";
inputNota3.style.border = "solid 2px white";
inputNota3.style.borderRadius = "10px";
inputNota3.style.outline = "0";
inputNota3.style.color = "white";
inputNota3.style.paddingLeft = "10px";
inputNota3.style.fontSize = "16px";
inputNota3.type = "number";
nota3.appendChild(inputNota3);

// Botão calcular

const button = document.createElement("button");
button.style.width = "225px";
button.style.height = "45px";
button.style.backgroundColor = "white";
button.style.color = "#1877F2";
button.style.outline = "0";
button.style.border = "solid white";
button.style.borderRadius = "30px";
button.textContent = "Calcular Média";
button.style.fontSize = "15.5px";
button.style.fontWeight = "600";
button.style.cursor = "pointer";
calculadora.appendChild(button);

// div resultado
const divResultado = document.createElement("div");
divResultado.style.width = "205px";
divResultado.style.height = "250px";
divResultado.style.position = "relative";
divResultado.style.right = "60px";
divResultado.style.display = "flex";
divResultado.style.flexDirection = "column";
divResultado.style.alignItems = "center";
const imgDesc = document.createElement("img");
imgDesc.src = "assets/desconhecido.png";
imgDesc.style.width = "250px";
imgDesc.style.height = "250px";
imgDesc.style.position = "relative";
imgDesc.style.bottom = "70px";
// divResultado.style.visibility = 'hidden'
flex.appendChild(divResultado);
var statusMedia = "";
var limpou = true;
button.addEventListener("click", () => {
  const resultado = document.createElement("p");
  resultado.style.color = "white";
  resultado.style.fontSize = "18px";
  resultado.style.fontWeight = "500";
  resultado.style.position = "relative";
  resultado.style.bottom = "153px";
  resultado.style.left = "10px";
  if (limpou == false) {
    let nome = "";
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let media = 0;
    inputName.value = "";
    inputNota1.value = "";
    inputNota2.value = "";
    inputNota3.value = "";
    divResultado.textContent = "";
    statusMedia = "";
    button.textContent = "Calcular Média";
    limpou = true;
  } else {
    let nome = inputName.value;
    let nota1 = Number(inputNota1.value);
    let nota2 = Number(inputNota2.value);
    let nota3 = Number(inputNota3.value);
    let media = (nota1 + nota2 + nota3) / 3;
    if (nota1 <= 10 && nota2 <= 10 && nota3 <= 10 && /^[A-Za-zÀ-ú \-]+$/.test(nome) && nome.trim() !== "" && nome !== "" && inputNota1.value !== "" &&
    inputNota2.value !== "" && inputNota3.value !== ""
    ) {
      button.textContent = "Calcule Novamente";

      if (media <= 3) {
        statusMedia = "Reprovado";
      } else if (media <= 6) {
        statusMedia = "Recuperação, Por favor Melhore";
      } else {
        statusMedia = "Aprovado";
      }

      resultado.innerText = `
    Nome: ${nome}
    Média: ${media.toFixed(2)}
    Status: ${statusMedia}
    `;
      limpou = false;
      divResultado.appendChild(imgDesc);
      divResultado.appendChild(resultado);
    } else {
      alert(
        "Por favor, Preencha todos os Campos, as Notas não podem ser maiores do que 10 e não utilize Números em seu Nome!"
      );
    }
  }
});

// Rodapé
const footer = document.createElement("footer");
footer.style.width = "100%";
footer.style.height = "140px";
footer.style.backgroundColor = "#202020";
footer.style.overflow = "hidden";
body.appendChild(footer);

// Div desenvolvedor info
const dev = document.createElement("div");
dev.style.height = "130px";
dev.style.width = " 300px";
dev.style.margin = "auto";
footer.appendChild(dev);

// Nome do Dev
const devName = document.createElement("h1");
devName.textContent = "Lucas Sales";
devName.style.color = "#1877F2";
devName.style.fontSize = "40px";
devName.style.textAlign = "center";
devName.style.position = "relative";
devName.style.bottom = "10px";
dev.appendChild(devName);

// Redes socias para contato
const redesSocias = document.createElement("div");
redesSocias.style.height = "60px";
redesSocias.style.display = "flex";
redesSocias.style.justifyContent = "center";
redesSocias.style.position = "relative";
redesSocias.style.bottom = "45px";
redesSocias.style.cursor = "pointer";
dev.appendChild(redesSocias);

const linkedin = document.createElement("img");
linkedin.src = "assets/icons8-linkedin.png";
linkedin.style.maxWidth = "50px";
linkedin.style.maxHeight = "50px";
linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/lucas-sales-a22007300/", "_blank");
});
redesSocias.appendChild(linkedin);

const instagram = document.createElement("img");
instagram.src = "assets/icons8-instagram.png";
instagram.style.maxWidth = "50px";
instagram.style.maxHeight = "50px";
instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/lucasdev7_/", "_blank");
});
redesSocias.appendChild(instagram);

const github = document.createElement("img");
github.src = "assets/icons8-github.png";
github.style.maxWidth = "50px";
github.style.maxHeight = "50px";
github.addEventListener("click", () => {
  window.open("https://github.com/lucas6180", "_blank");
});
redesSocias.appendChild(github);
