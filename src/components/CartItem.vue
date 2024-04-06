<script setup>
import { ref, defineProps } from 'vue';
import { useCartStore } from '../store/cartStore';
import { computed } from 'vue';
const cartStore = useCartStore();


const cartProducts = computed(() => cartStore.products);


const removeFromCart = (productId) => {
    console.log(productId)
    cartStore.removeFromCart(productId);
};

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