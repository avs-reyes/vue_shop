<script lang="ts" setup>
import { useDrawerStore } from "@/store/drawerStore";

const drawerStore = useDrawerStore();

</script>

<template>
  <v-app-bar scroll-behavior="elevate" color="#0E0D0D" :elevation="2">

    

    <v-app-bar-title>
      <router-link to="/">
        <!-- <img
          src="https://neubox.com/blog/wp-content/uploads/2019/09/ecommerce1.jpg"
          alt="Logo"
          ration
          :width="220"
          aspect-ratio="16/9"
          cover
        /> -->
      </router-link>
    </v-app-bar-title>
  </v-app-bar>
</template>