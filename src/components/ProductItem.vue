<template>
    <v-card color="#0E0D0D" style="align-items: center;">
        <v-img class="align-end text-white" height="200" :src="product.imageUrl" cover >
            <v-card-title>{{ product.name }}</v-card-title>
        </v-img>

        <v-card-text>
            <p class="text-h6 ">
                {{ product.price }} {{ product.currency }}
            </p>

            <div>{{ product.description !== null ? product.description : 'No hay descripción' }}</div>

        </v-card-text>
        <SingleProductDialog :product="product">
            <v-btn prepend-icon="mdi-eye-check-outline" color="white" style="background-color: #0E0D0D;">ver producto</v-btn>
        </SingleProductDialog>
    </v-card>

</template>

<script setup>
import { ref, defineProps } from 'vue';
import SingleProductDialog from './SingleProductDialog.vue'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>