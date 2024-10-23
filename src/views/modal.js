import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOfModifyProduct } from "../services/products";

const cancelbutton= document.getElementById("cancelbutton");
cancelbutton.addEventListener('click',() =>{
    closemodal();
})

//guardar o modificar producto
const aceptbutton= document.getElementById("aceptbutton");
aceptbutton.addEventListener('click',() =>{
   handleSaveOfModifyProduct();
});

//abrir y cerrar modal
export const openmodal= () =>{
    const modal= document.getElementById("modalPopup");
    //cambio el valor none a flex para que me lo muestre el popup
    modal.style.display="flex";
    const delet =document.getElementById("deletebutton");
    if(productoActivo){
        delet.style.display ="block";
    }else{
      delet.style.display = "none"
    }
    if(productoActivo){
     const nombre =document.getElementById("nombre");
     const imagen =document.getElementById("img");
     const precio =document.getElementById("precio");
     const categoria =document.getElementById("categoria");
      imagen.value=productoActivo.imagen;
      categoria.value=productoActivo.categoria;
      precio.value=productoActivo.precio;
      nombre.value=productoActivo.nombre;
    }
 };
 export const closemodal= () => {
     const modal= document.getElementById("modalPopup");
     
     recetModal();
     //cambio el valor flex a none para que no me lo muestre el popup
     modal.style.display="none";
     setproductoActivo(null);
     
  }
  
  //receteo de las props
  const recetModal = () =>{
   const nombre =document.getElementById("nombre");
   const imagen =document.getElementById("img");
   const precio =document.getElementById("precio");
   const categoria =document.getElementById("categoria");
   imagen.value="";
   categoria.value="Seleccione una categoria";
   precio.value=0;
   nombre.value="";
 };

 const delet= document.getElementById("deletebutton");
 delet.addEventListener("click", () => {
  handleButtonDelete();
 });

 const handleButtonDelete = () => {
  handleDeleteProduct()
 }