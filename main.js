import { handleGetProductsToStorage } from "./src/views/store";
import { renderCategories } from "./src/services/categories";
//importamos los estilos
import './style.css'
import { closemodal, openmodal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/SearchBart";


/** ---------------APLICATION ------------------------------- */
export let categoriaActiva= null;
export const SetCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn
};
export let productoActivo=null;
export const setproductoActivo =(prductoIn)=>{
  productoActivo=prductoIn;
}


renderCategories();
handleGetProductsToStorage();

/** ---------------PRODUCTOS ------------------------------- */
// BOTON AGREGAR
const buttonadd = document.getElementById("buttonadd_Element");
buttonadd.addEventListener('click', ()=>{
    openModal();
});

//BOTON BUSCAR
const buttonSearch = document.getElementById("buscar");
buttonSearch.addEventListener('click',()=>{
  handleSearchProductByName();
  })

/** ---------------POPUP ------------------------------- */

const buttonCancel = document.getElementById("cancelbutton");
buttonCancel.addEventListener('click', ()=>{
    closeModal();
});

// FUNCIONES ABRIR Y CERRAR MODAL
const openModal = ()=> {
   const modal = document.getElementById("modalPopup");
    modal.style.display = "flex";
};
const closeModal = ()=> {
    const modal = document.getElementById("modalPopup");
     modal.style.display = "none";
};

// GUARDAR O MODIFICAR PRODUCTOS
const aceptButton = document.getElementById("aceptbutton");
aceptButton.addEventListener('click', ()=>{
    handleAddorModifyElements();
});
const handleAddorModifyElements = ()=> {
    const nombre = document.getElementById("nombre").value,
     img = document.getElementById("img").value,
     precio = document.getElementById("precio").value,
     categoria = document.getElementById("categoria").value;

     closeModal();
     
};