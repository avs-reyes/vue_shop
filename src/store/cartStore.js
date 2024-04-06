import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        // Se usa un objeto para guardar los productos. Siendo la clave el ID y el valor el producto agregado. 
        // Esto permite llevar cuenta de las existencias de un mismo producto. 
        // Aparte, se guarda el carrito en el localstorage. Cuando se inicia el estado checa si hay datos, sino los hay, declara 
        // un objeto vacío.
        products: JSON.parse(localStorage.getItem('cartProducts')) || {}, 
    }),
    getters: {
        totalItems: (state) => Object.keys(state.products).length,
    },
    actions: {
        // Añade productos al Objeto products. Si no existe, crea uno nuevo.
        addToCart(product) {
            const id = product.id;
            if (!this.products[id]) {
                this.products[id] = [];
            }
            this.products[id].push(product);
            localStorage.setItem('cartProducts', JSON.stringify(this.products));
        },
        // Eliminar productos del Objeto products. Si se quedaron en 0 existencias, se elimina la clave.
        removeFromCart(id) {
            if (this.products[id] && this.products[id].length) {
                const productoEliminado = this.products[id].shift();
                localStorage.setItem('cartProducts', JSON.stringify(this.products));
                if (this.products[id].length === 0) {
                    delete this.products[id];
                }
            }
        },
        clearCart() {
            this.products = {};
            localStorage.setItem('cartProducts', JSON.stringify(this.products));
        },
    },
});
