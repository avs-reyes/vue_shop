<script setup>
import { onMounted } from "vue";
import { useProducts } from '../composables/useProducts';
import ProductItem from '../components/ProductItem.vue'
import SectionTitle from "@/components/sectionTitle.vue";
import Loader from "@/components/Loader.vue";

const { getProducts, loading, products } = useProducts()

onMounted(() => {
        // Se hace una petición apenasinicia la página al composable para obtener los productos.
        getProducts()
});
</script>

<template>
        <!-- Componente donde se ven los productos -->
        <v-container style="padding: 0px;" v-if="!loading" >
                <SectionTitle title="Productos"/>
                <v-card style="padding: 25px; margin-top: 2rem;">
                        <v-row>
                                <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
                                        <!-- Se manda a llamar a un componente, que será el item que represente un producto. -->
                                        <ProductItem :product="product" />
                                </v-col>
                        </v-row>
                </v-card>
        </v-container>
        <!-- En lo que el servidor responde con los datos de los productos, la página muestra una carga -->
        <v-container v-else>
                <Loader/>
        </v-container>
</template>