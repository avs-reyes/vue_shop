<script setup>
import { ref, onMounted } from "vue";
import { useProducts } from '../composables/useProducts';
import ProductItem from '../components/ProductItem.vue'
import SingleProductDialog from '../components/SingleProductDialog.vue'
import SectionTitle from "@/components/sectionTitle.vue";
import Loader from "@/components/Loader.vue";

const { getProducts, loading, products } = useProducts()

onMounted(() => {
        getProducts()
});
</script>

<template>
        <v-container style="padding: 0px;" v-if="!loading" >
                <SectionTitle title="Productos"/>

                <v-card style="padding: 25px;">

                        <v-row>
                                <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
                                        <ProductItem :product="product" />
                                </v-col>
                        </v-row>
                </v-card>
        </v-container>



        <v-container v-else>
                <Loader/>
        </v-container>
</template>