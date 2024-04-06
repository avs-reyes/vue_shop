<script setup>
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/CartItem.vue'
import { computed } from 'vue';
import SectionTitle from '@/components/sectionTitle.vue';
import EmptyCart from '@/components/icons/EmptyCart.vue';
const cartStore = useCartStore();


const cartProducts = computed(() => cartStore.products);

const getTotalPrice = (product,currency) => {
  let precioTotal = 0;
  for (const key in product) {
    product[key].forEach(item => {
      if (item.currency.toLowerCase() === 'usd' && currency.toLowerCase() === 'mxn') {
        precioTotal += item.price * 16; 
      } else if (item.currency.toLowerCase() === 'mxn' && currency.toLowerCase() === 'usd') {
        precioTotal += item.price / 16; 
      } else {
       
        precioTotal += item.price;
      }
    });
  }
  return precioTotal;
}

</script>


<template>
    <v-card class="mx-auto" max-width="30rem">
        <SectionTitle class="ml-4 mt-4" title="Carrito" />
        <v-container v-if="Object.keys(cartProducts).length > 0">
            <v-row dense v-for="id in cartProducts">
                <CartItem :product="id" />
            </v-row>
            <v-divider class="mt-5 " :thickness="4" color="black"></v-divider>
            <v-btn prepend-icon="mdi-cart-heart" class="mt-5" width="100%" color="black">Comprar!</v-btn>
        </v-container>
        <v-container v-else>
            <EmptyCart/>
        </v-container>
    </v-card>
</template>
