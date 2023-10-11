const modalInscricao = document.getElementById("modal-inscricao");
const btnInscricao = document.getElementById("btn-inscricao");
const closeInscrição = document.getElementById("close-inscricao");

//Modal cs2
const cs2 = document.getElementById("modal-cs2");
const btnCs2 = document.getElementById("cs2");
const closeCs2 = document.getElementById("close-cs2");

//Modal valorant
const valorant = document.getElementById("modal-valorant");
const btnValorant = document.getElementById("Valorant");
const closeValorant = document.getElementById("close-valorant");

//Modal fifa
const fifa = document.getElementById("modal-fifa");
const btnFifa = document.getElementById("FIFA");
const closeFifa = document.getElementById("close-fifa");

//Modal MK
const mk = document.getElementById("modal-mk11");
const btnMk = document.getElementById("MK11");
const closeMk = document.getElementById("close-mk");

//Modal retro
const retro = document.getElementById("modal-retro");
const btnRetro = document.getElementById("RETRO");
const closeRetro = document.getElementById("close-retro");

//Modal naruto
const naruto = document.getElementById("modal-naruto");
const btnNaruto = document.getElementById("NARUTO");
const closeNaruto = document.getElementById("close-naruto");

//MODA DO BOTÃO INSCREVA-SE
btnInscricao.addEventListener("click", () => {
  modalInscricao.showModal();
});

closeInscrição.addEventListener("click", () => {
  modalInscricao.close();
});

//CS2
btnCs2.addEventListener("click", () => {
  cs2.showModal();
});

closeCs2.addEventListener("click", () => {
  cs2.close();
});

//VALORANT
btnValorant.addEventListener("click", () => {
  valorant.showModal();
});

closeValorant.addEventListener("click", () => {
  valorant.close();
});

//fifa
btnFifa.addEventListener("click", () => {
  fifa.showModal();
});

closeFifa.addEventListener("click", () => {
  fifa.close();
});

//MK
btnMk.addEventListener("click", () => {
  mk.showModal();
});

closeMk.addEventListener("click", () => {
  mk.close();
});

//retro
btnRetro.addEventListener("click", () => {
  retro.showModal();
});

closeRetro.addEventListener("click", () => {
  retro.close();
});

//NARUTO
btnNaruto.addEventListener("click", () => {
  naruto.showModal();
});

closeNaruto.addEventListener("click", () => {
  naruto.close();
});
