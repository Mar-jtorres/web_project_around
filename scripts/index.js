//Datos iniciales
const initialCards = [
  {
    name: "Santa Fe",
    link: "./Images/santafe.webp"
  },
  {
    name: "Cuajimalpa",
    link: "./Images/desierto-de-los-leones.jpg"
  },
  {
    name: "Marquesa",
    link: "./Images/marquesa.jpg"
  },
  {
    name: "Tacubaya",
    link: "./Images/tacubaya.jpg"
  },
  {
    name: "Reforma",
    link: "./Images/reformanuevo.jpg"
  },
  {
    name: "Chapultepec",            
    link: "./Images/chapu.jpg"
  }
];

// Selección de elementos del DOM
const elementsContainer = document.querySelector(".elements");

// Función para crear tarjetas
function createCard(cardData) {
  // aquí irá tu función
  // Aquí creas todos los elementos de la tarjeta
  const cardElement = document.createElement('div');
  cardElement.classList.add('elements__element');
  cardElement.innerHTML = 
  `<button class="elements__element-button-delete" type="button"> <img src="../Images/v_thrash.svg" alt="Delete">
   </button>
  <img class="elements__element-image" src="${cardData.link}" alt="${cardData.name}">
  <div class="elements__element-info">
    <h3 class="elements__element-title">${cardData.name}</h3>
    <button class="elements__element-button" type="button">
      <img src="../Images/Vector-like.svg" alt="Me gusta">
    </button> 
  </div>`;
  const likeButton = cardElement.querySelector(".elements__element-button");
  likeButton.addEventListener("click", function() {
  likeButton.classList.toggle("elements__element-button_active");
 
  //LIKE  HEART
  const heartImage = likeButton.querySelector('img'); // Encuentra la imagen del corazón
  // Aquí cambiarás el src, logica de comparacion
  if (heartImage.src.includes("heart_full.svg")) {
  // El corazón está está lleno, cámbialo a vacío
  heartImage.src = "../Images/Vector-like.svg";
} else {
   // El corazón está vacío, cámbialo a lleno
  heartImage.src = "../Images/heart_full.svg";
   }
  
  // Make deleteButton work
  const deleteButton = cardElement.querySelector(".elements__element-button-delete");
  deleteButton.addEventListener('click', function() {
  cardElement.remove();
  }); 
   }); 
  
 
// para que las tarjetas recien agregadas a la gallery se abran como popup
const justAddCard = cardElement.querySelector(".elements__element-image") 
justAddCard.addEventListener('click', function(event) {

const popupImage = document.querySelector('.popup__image'); 
popupImage.src = event.target.src;

const card = event.target.closest('.elements__element');
const cardTitle = card.querySelector('.elements__element-title').textContent;

const popupTitle = document.querySelector('.popup__title');
popupTitle.textContent = cardTitle;

const popupWithImage = document.querySelector('.popup_type_image'); 
popupWithImage.classList.add('popup__opened');
});

  // Al final, DEBES devolver el elemento creado
  return cardElement;
  
}

// Función para renderizar las tarjetas iniciales
function renderizarTarjetasIniciales() {
  // aquí usarás elementsContainer
  initialCards.forEach((card) => { 
    const cardElement = createCard(card);          
    elementsContainer.prepend(cardElement) 
});
}
// Llamar la función cuando se carga la página
renderizarTarjetasIniciales();


// VARIABLES para seleccionar los elementos de acuerdo a su id
const editButton = document.querySelector("#edit-button");
const closeButton = document.querySelector("#close-button");
const popUp = document.querySelector("#popup");

// FUNCIONES
// Para que abra el popup:
function openPopup(){
    popUp.classList.add('popup__opened');
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
    popUp.classList.remove('popup__opened');
}

      // Para editar los campos del formulario y que se queden guardados en pantalla
       // Buscando el formulario 
const formElement = document.querySelector('.popup__form');
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
       
const cardImages = document.querySelectorAll(".elements__element-image");
// EVENT LISTENERS
editButton.addEventListener('click', openPopup); // hacer que popup se abra al dar click en boton editar
closeButton.addEventListener('click', closePopup); // hacer que se cierre al dar click en boton cerrar
formElement.addEventListener('submit', handleProfileFormSubmit); // hacer que se encargue de los datos al dar submit

// trabajando en las ventanas emergentes: 
cardImages.forEach((imagen) => {
  imagen.addEventListener ('click', (evt) => {
      const imagenSrc = evt.target.src;
      const imagenAlt = evt.target.alt;
// seleccionar elementos popup de la galeria
    const popupImagen = document.querySelector('.popup_type_image');
    const popupImageElement = popupImagen.querySelector('.popup__image');
    const popupTitle = popupImagen.querySelector('.popup__title');
// asignar los datos de la imagen clickeada
    popupImageElement.src = imagenSrc;
    popupImageElement.alt = imagenAlt;
    popupTitle.textContent = imagenAlt;
// abrir el popup con la clase CSS antes creada, la reusamos
    popupImagen.classList.add('popup__opened');
  });
});

// boton cerrar de popup galeria
const closeButtonImg = document.querySelector('.popup__close-button');
const popUpGallery = document.querySelector('#popup_type_image');


// LLAMAR UNA FUNCION ESPECIFICA PARA cerrar POPUP DE LA GALERIA abrir imagen
function closePopupGallery() {
    console.log("Función cerrar-abrir imagen ejecutada");
    popUpGallery.classList.remove('popup__opened');
}
closeButtonImg.addEventListener('click', closePopupGallery);

//boton anadir Img
const addCardButton = document.querySelector('#add-button');


//FUNCION PARA ABRIR POPUP anadir imagen
function openAddCardPopup() {
    const addCardPopup = document.querySelector('#add-card-popup');
    // ¿Qué necesitas hacer para mostrar el popup?
    addCardPopup.classList.add('popup__opened');
}
//EVENTLISTENER PARA EL BOTON ANADIR IMAG

addCardButton.addEventListener('click', openAddCardPopup);

// Seleccionar boton cerrar popup agregar img
const closeButtonAdd = document.querySelector('.popup__close-add');

const popUpAddGallery = document.querySelector('#add-card-popup');

function closePopupAddImg() {
    console.log("Función cerrar-abrir popup imagen agregada");
    popUpAddGallery.classList.remove('popup__opened');
}

closeButtonAdd.addEventListener('click', closePopupAddImg);
console.log("Event listener asignado"); // Línea temporal

//FUNCION PARA AGREGAR IMG NUEVAS, seleccionando elformulario add card form
const addCardForm = document.getElementById('add-card-form');


function handleAddCardSubmit(evt) {
    // 1. Prevenir comportamiento por defecto
    evt.preventDefault();
    // 2. Obtener valores de los campos add new card
     const placeName = evt.target['place-name'].value;
     const imageLink = evt.target.link.value;
    // 3. Crear objeto con los datos
    const createNewCard = {
    name: placeName,    
    link: imageLink
    }
    
    // 4. Usar createCard() para crear la tarjeta
    const newCardElement = createCard(createNewCard);
    // 5. Agregar al contenedor
    elementsContainer.prepend(newCardElement);
    // 6. Cerrar popup, llamando la funcion correspondiente
    closePopupAddImg();
    // 7. Limpiar formulario
     evt.target.reset();
}

addCardForm.addEventListener('submit', handleAddCardSubmit);


