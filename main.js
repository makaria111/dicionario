const openModalButtons = document.querySelectorAll(".botao-modal");
const closeModalButtons = document.querySelectorAll(".close-modal");
const modals = document.querySelectorAll(".modal");
const fades = document.querySelectorAll(".fade");

const toggleModal = (index) => {
    [modals[index], fades[index]].forEach((el) => el.classList.toggle("hide"));
};

openModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => toggleModal(index));
});

closeModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => toggleModal(index));
});



const botoes = objetos.map((objeto, indice)=>{
    const botao = document.createElement('button')
    botao.classList.add('botao-txt')

    botao.addEventListener('click', ()=>{
        audioModal.src = objeto.audio
    })
    return botao
})