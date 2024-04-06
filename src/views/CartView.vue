<script setup>
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/CartItem.vue'
import { computed, ref } from 'vue';
import SectionTitle from '@/components/sectionTitle.vue';
import EmptyCart from '@/components/icons/EmptyCart.vue';
const cartStore = useCartStore();
const snackbar = ref(false)
const cartProducts = computed(() => cartStore.products);

</script>


<template>
    <v-card class="mx-auto" max-width="30rem">
        <SectionTitle class="ml-4 mt-4" title="Carrito" />
        <v-container v-if="Object.keys(cartProducts).length > 0">
            <v-row dense v-for="id in cartProducts">
                <!-- Se llama a un componente para renderizar las tarjetas que representan los productos en el carrito. -->
                <CartItem :product="id" />
            </v-row>
            <v-divider class="mt-5 " :thickness="4" color="black"></v-divider>


            <div class="text-center ma-2">
                <v-btn prepend-icon="mdi-cart-heart" class="mt-5" width="100%" color="black"
                    @click="snackbar = true">Comprar!</v-btn>
                <v-snackbar v-model="snackbar">
                    Compra hecha!
                    <template v-slot:actions>
                        <v-btn color="sucess" variant="text" @click="snackbar = false">
                            Cerrar
                        </v-btn>
                    </template>
                </v-snackbar>
            </div>


        </v-container>
        <v-container v-else>
            <EmptyCart />
        </v-container>
    </v-card>
</template>
