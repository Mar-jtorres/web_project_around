// VARIABLES para seleccionar los elementos de acuerdo a su id
let editButton = document.querySelector("#edit-button");
let closeButton = document.querySelector("#close-button");
let popUp = document.querySelector("#popup");
// FUNCIONES
// Para que abra el popup:
function openPopup(){
    popUp.classList.add('popup_opened');
    // Modificar la funcion para quie tambien rellene los campos de entrada
       // Seleccionar el texto que me interesa de la pagina, 
       // seleccionar el campo del formulario donde quiero que se vea
       // crea la accion: A campoInput dale el valor de nombreEnPagina
       const nombreEnPagina = document.querySelector('.profile__info').textContent;
       const campoInput = document.querySelector('.popup__input');
       campoInput.value = nombreEnPagina;
       // Same con el segundo elemento 
       const aboutMe = document.querySelector('.profile__sub').textContent;
       const campoTextarea = document.querySelector('.popup__textarea');
       campoTextarea.value = aboutMe;

}
// Para que cierre el popup:
function closePopup() {
    popUp.classList.remove('popup_opened');
}

      // Para editar los campos del formulario y que se queden guardados en pantalla
       // Buscando el formulario 
let formElement = document.querySelector('.popup__form');
function handleProfileFormSubmit(evt){
        evt.preventDefault ();
        // Donde va a escribir el user su info:
        let nameInput = document.querySelector('.popup__input');
        let jobInput = document.querySelector('.popup__textarea');
        // crear dos variables que tomen lo que el user escriba 
        let nameValue = nameInput.value;
        let jobValue = jobInput.value;
        // Donde debe mostrarse lo que el user escribio
        let profileName = document.querySelector('.profile__info');
        let profileJob = document.querySelector('.profile__sub');
        // Haz que el contenido que el user escriba se vea donde indicaste arriba 
        // usamos textContext para insertar nuevos valores
        profileName.textContent = nameValue;
        profileJob.textContent = jobValue;
        // Llamar la funcion de cierre del popup
        closePopup();
       }
       
   
// EVENT LISTENERS
editButton.addEventListener('click', openPopup); // hacer que popup se abra al dar click en boton editar
closeButton.addEventListener('click', closePopup); // hacer que se cierre al dar click en boton cerrar
formElement.addEventListener('submit', handleProfileFormSubmit); // hacer que se encargue de los datos al dar submit

console.log("JavaScript conectado!");

