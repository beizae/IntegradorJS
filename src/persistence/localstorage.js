//================== LOCAL STORAGE =====================
export const handleProductLocalStorage  = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        return products;

    } else {
        return [];
    }
    /*
     const products = localStorage.getItem("products");
     //console.log("Valor de products:", products);
     if (products) {
         return JSON.parse(products);
     } else {
        // Inicializa localStorage con un array vacío
        localStorage.setItem("products", JSON.stringify([]));
         return [];
     }*/
};


// GUARDAR EN LOCALSTORAGE  
export const setInLs = (productIn) =>{
    //trae los elementos
    let producsInls =handleGetProductoLs();
   
    const existingIndex =producsInls.findIndex((productsLocal) => productsLocal.id == productIn.id
    );
    //verifico si existe el producto
    if(existingIndex!== -1){
    //si existe debe reemplazarse acediendo al indice
      producsInls[existingIndex] = productIn;
        
    }else{
    //si no existe lo agrega 
        producsInls.push(productIn);
       
    }
 //seteo el nuevo array
 localStorage.setItem("products",JSON.stringify(producsInls));
 
};
