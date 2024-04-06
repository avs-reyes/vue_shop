<script setup>
import Ecommerce from '@/components/icons/Ecommerce.vue';
import {  useRouter } from 'vue-router'
import { useCartStore } from '@/store/cartStore';
import { ref, computed } from 'vue';

const cartStore = useCartStore();
const cartProducts = computed(() => cartStore.products);

const router = useRouter();



const redirect = (url) => {
  router.push(url)
}
</script>

<template>
  <v-navigation-drawer permanent style="width: 20%;" color="#0E0D0D">
    <template v-slot:prepend>

      <v-list-item lines="two"
        prepend-avatar="https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
        subtitle="Bienvenido!" title="Usuario"></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-city" title="Prodcutos" value="home" @click="redirect('/')"></v-list-item>
      <v-list-item prepend-icon="mdi-account" :title="`Mi carrito -  (${Object.keys(cartProducts).length})`" value="account" @click="redirect('/cart')"> </v-list-item>
    </v-list>
  </v-navigation-drawer>


</template>