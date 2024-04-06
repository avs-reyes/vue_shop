// cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        products: {}, 
    }),
    getters: {
        totalItems: (state) => {
            return Object.keys(state.products).length;
        },
    },
    actions: {
        addToCart(product) {
            const id = product.id;
            console.log(!this.products[id])
            if (!this.products[id]) {

              this.products[id] = [];
            }
            this.products[id].push(product);
            console.log(this.products)
            
        },
        removeFromCart(id) {
            if (this.products[id]) {
                const productoEliminado = this.products[id].shift();
                console.log(`Producto eliminado:`, productoEliminado);
                if (this.products[id].length === 0) {
                    delete this.products[id];
                    console.log(`Entrada para el ID ${id} eliminada`);
                  }
              } else {
                console.log(`No se encontró ningún producto con el ID ${id}`);
              }
        },
        clearCart() {
            this.products = []; 
        },
    },
});
