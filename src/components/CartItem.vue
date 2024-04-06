<script setup>
import { useCartStore } from '../store/cartStore';
const cartStore = useCartStore();

// Función que accede a un método hecho con el manejador de estados Pinia para eliminar entradas de artículos a la lista.
const removeFromCart = (productId) => {
    console.log(productId)
    cartStore.removeFromCart(productId);
};

// Añade más entradas a una clave de producto. Esto ayudo a manejar la cantidad de un mismo producto.
const addOneMore = (product) => {
    cartStore.addToCart(product);
};

const props = defineProps({
    product: {
        type: {},
        required: true
    }
});
</script>

<template>
    <v-col cols="12">
        <v-card color="#0E0D0D" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <!-- Aquí solo se ocupa la posición 0 para obtener información, ya que los demás objetos del arreglo son el mimso
                    esto lo hago para poder guardar cantidades de objetos usando un objeto clave-valor -->
                    <v-card-title class="text-h5"> {{ product[0].name }} </v-card-title>

                    <v-card-subtitle>{{ product[0].description }}</v-card-subtitle>

                    <v-card-actions>
                        <v-btn icon="mdi-minus" class="ml-2 mr-2" size="small" variant="outlined" @click="removeFromCart(product[0].id)"></v-btn>
                        {{ product.length }}
                        <v-btn icon="mdi-plus" class="ml-2 mr-2" size="small" variant="outlined" @click="addOneMore(product[0])"></v-btn>
                    </v-card-actions>
                </div>

                <v-avatar class="ma-3" rounded="0" size="125">
                    <v-img :src="product[0].imageUrl"></v-img>
                </v-avatar>
            </div>
        </v-card>
    </v-col>

</template>