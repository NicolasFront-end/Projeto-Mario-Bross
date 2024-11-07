/* OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal 



 OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

 - passo 1 dar um jeito de pegar o elemento que representa o botão na tela usando js
 - passo 2 dar un jeito de identificar quando o usuário clicar no botão
 - passo 3 dar um jeito de pegar  o elemento da modal na js
 - passo 4 abrir a modal na tela


 OBJETIVO 2 quando o usuário clicar no X devemos fechar a modal

- passo 1 dar um jeito de pegar o elemento de fechar modal usando o js
- passo 2 dar um jeito de identificar quando o usuario clicar no X passo 3 fechar a modal 
- passo 3 - fechar a modal 

*/

console.log( 'mostrar o document', document);

//passo 1 dar um jeito de pegar o elemento que representa o botão na tela usando js
const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById("video");
// passo 3 dar um jeito de pegar  o elemento da modal na js
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


//passo 2 dar un jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
// passo 4 abrir a modal na tela
modal.classList.add("aberto");
video.setAttribute("src", linkDoVideo); 
});


// OBJETIVO 2 quando o usuário clicar no X devemos fechar a modal
// passo 1 dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

//passo 2 dar um jeito de identificar quando o usuario clicar no X passo 3 fechar a modal 
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal 
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
})










