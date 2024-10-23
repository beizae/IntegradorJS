// render de la vista categorias

import { categoriaActiva } from "../../main";
import { handleGetProductoLs } from "../persistence/localStorage";
import { handlerenderlist } from "../views/store";


const handleFilterProductsByCategory =(categoryIn) =>{
    const products= handleGetProductoLs();
    switch(categoryIn){
        case categoriaActiva:
            handlerenderlist(products);
            break;
        case "Todo":
            handlerenderlist(products) 
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) =>el.categoria == categoryIn);
            handlerenderlist(result);
            break;
        default:
        break;
        case "mayorPrecio":
            const resultpreciomayor= [...products].sort((a,b) =>b.precio - a.precio);
            handlerenderlist(resultpreciomayor);
            break;
        case "menorPrecio":
            const resulmenorprecio= [...products].sort((a,b)=>  a.precio - b.precio);
            handlerenderlist(resulmenorprecio);
            break;
           
    }
};


export const renderCategories =()=>{

    // TOMAMOS LOS ELEMENTOS DE LA LISTA 
    const ulList = document.getElementById("listfilter");

    //CREAMOS LOS ELEMENTOS DENTRO DE LA LISTA
    ulList.innerHTML = `
    <li class='liActive' id="Todo">Todos los productos </li>
    <li id="Hamburguesa">Hamburguesa </li>
    <li id="Papas">Papas </li>
    <li id="Gaseosas">Gaseosas </li>
    <li id="MayorPrecio">Mayor Precio </li>
    <li id="MenorPrecio">Menor Precio </li>
    `;

    //AÑADIMOS DINAMICAMENTE EL EVENTO CLICK
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((lielement)=>{
        lielement.addEventListener('click', ()=> {
            handleClieck(lielement);
        });
    });
    //VERIFICAMOS Y MANEJAMOS EL ESTILO DEL ELEMENTO SELECCIONADO
    const handleClieck = (elemento) =>{
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                    el.classList.remove('liActive');

            }else {
                if (elemento == el) {
                    el.classList.add('liActive');
                    handleFilterProductsByCategory(el.id);
                }
            }
        })
    }
};