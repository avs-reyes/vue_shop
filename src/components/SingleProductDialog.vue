<script setup>
import { shallowRef } from 'vue'
import { ref } from 'vue'
import user from '@/assets/constants'
const dialog = shallowRef(false)
import { useCartStore } from '../store/cartStore';
import { useShippement } from '@/composables/useShippement'

// Se inicia el composable responsable del uso de la api de Envia.com
const {getQuote} = useShippement();

// Se guarda un producto en el store del carro
const storeProduct = (product) => {
    const cartStore = useCartStore();
    cartStore.addToCart(product);
}

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="text-center pa-4">
        <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
            <template v-slot:activator="{ props }">
                <v-sheet color="#0E0D0D" v-bind="props" v-ripple style="max-width: max-content;">
                    <slot color="#0E0D0D"> </slot>
                </v-sheet>
            </template>

            <v-card color="#0e0d0d" >
                <v-toolbar color="transparent">
                    <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
                    <v-spacer></v-spacer>
                </v-toolbar>

                <v-container class="w-60 h-100" >
                    <v-row  class="container ">

                        
                        <v-col class="p-30" cols="8" style="color:black">
                            <div class="img-container">
                                <v-img  class="text-white ":src="product.imageUrl" 
                                   >
                                </v-img>
                            </div>
                            
                        </v-col>


                        <v-col cols="4" style="color:black">
                            <v-container>
                                <v-card variant="outlined" class="pa-5" style="background-color: white;">
                                    
                                    <h1 style="font-weight: bold;" class="text-h4"> {{ product.name }}</h1>
                                    
                                    
                                    <h1 v-if="!product.discount"  class="text-h5"> {{ product.price }}  {{ product.currency }}</h1>
                                    <h1 v-else  class="text-h5"> Discount!</h1>
        
                                     <p class="text-h7 "> {{ product.description !== null ? product.description : 'No hay descripción' }} </p> 

                                     <p  style="font-size: medium; color:grey; " class="mb-5"> Disponibles: {{ product.quantity }}</p>

                                     <p class="text-h7 mb-5"><strong>Vendido por:</strong> {{ product.vendor !== null ? product.vendor : 'No hay descripción' }} </p> 

                                     <v-divider class="mt-5 mb-5 " :thickness="2" color="black"></v-divider>
                                     <p class="text-h7"> Hasta: {{ user.origin.city }} </p> 
        
                                     <p class="text-h7"> Hasta: {{ user.destination.city }} </p> 
        
                                     <v-btn @click="getQuote(user)">
                                        Calcular envío
                                    </v-btn>
        
                                    <br>
    
                                    <v-divider class="mt-5 " :thickness="2" color="black"></v-divider>
                                    <v-btn prepend-icon="mdi-cart-heart" class="mt-5" width="100%" color="black" @click="storeProduct(product)">
                                        agregar al carrito
                                    </v-btn>
    
                                </v-card>

                            </v-container>
                           
                        </v-col>
                    </v-row>

                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<style>

.img-container {
    padding: 0px 5rem 0px 5rem;
    display: flex;
    justify-content: center;
    align-items: center; 
}

.descripcion {
    font-family: "Roboto", sans-serif;
    font-size: large;
    border-radius: 1%;
    padding: 5px;
    outline: 1px solid black;
    margin-top: 1rem;
}
.header{
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='69.282' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 5%, 96%, 1)'/><path d='M13.333-3.849v23.094M6.667-15.396l20 11.547M13.333-19.245l20 11.547M20 0v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 0M0-11.547l6.667 3.849 6.666 3.849L20 0m0-23.094l20 11.547v23.094L20 23.094l-6.667-3.849-6.666-3.849L0 11.547v-23.094l6.667-3.849 6.666-3.849zM40-3.769L20 7.698m20-3.849l-16.253 9.384L20 15.396M6.667-7.698v23.094m6.666 50.037v23.094M6.667 53.886l20 11.547M13.333 50.037l20 11.547M20 69.282v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 69.282M0 57.735l6.667 3.849 6.666 3.849L20 69.282m0-23.094l20 11.547v23.094L20 92.376l-6.667-3.849-6.666-3.849L0 80.829V57.735l6.667-3.849 6.666-3.849zm20 19.325L20 76.98m20-3.849L20 84.678M6.667 61.584v23.094m26.666-53.886v23.094m-6.666-34.641l20 11.547M33.333 15.396l20 11.547M40 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L40 34.641M20 23.094l6.667 3.849 6.666 3.849L40 34.641m0-23.094l20 11.547v23.094L40 57.735l-6.667-3.849-6.666-3.849L20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L40 42.339m20-3.849L40 50.037M26.667 26.943v23.094M-6.667 30.792v23.094m-6.666-34.641l20 11.547M-6.667 15.396l20 11.547M0 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L0 34.641m-20-11.547l6.667 3.849 6.666 3.849L0 34.641m0-23.094l20 11.547v23.094L0 57.735l-6.667-3.849-6.666-3.849L-20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L0 42.339m20-3.849L0 50.037m-13.333-23.094v23.094'  stroke-width='1' stroke='hsla(0, 6%, 90%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
}

.container {
    border-radius: 1%;
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='69.282' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 5%, 96%, 1)'/><path d='M13.333-3.849v23.094M6.667-15.396l20 11.547M13.333-19.245l20 11.547M20 0v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 0M0-11.547l6.667 3.849 6.666 3.849L20 0m0-23.094l20 11.547v23.094L20 23.094l-6.667-3.849-6.666-3.849L0 11.547v-23.094l6.667-3.849 6.666-3.849zM40-3.769L20 7.698m20-3.849l-16.253 9.384L20 15.396M6.667-7.698v23.094m6.666 50.037v23.094M6.667 53.886l20 11.547M13.333 50.037l20 11.547M20 69.282v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 69.282M0 57.735l6.667 3.849 6.666 3.849L20 69.282m0-23.094l20 11.547v23.094L20 92.376l-6.667-3.849-6.666-3.849L0 80.829V57.735l6.667-3.849 6.666-3.849zm20 19.325L20 76.98m20-3.849L20 84.678M6.667 61.584v23.094m26.666-53.886v23.094m-6.666-34.641l20 11.547M33.333 15.396l20 11.547M40 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L40 34.641M20 23.094l6.667 3.849 6.666 3.849L40 34.641m0-23.094l20 11.547v23.094L40 57.735l-6.667-3.849-6.666-3.849L20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L40 42.339m20-3.849L40 50.037M26.667 26.943v23.094M-6.667 30.792v23.094m-6.666-34.641l20 11.547M-6.667 15.396l20 11.547M0 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L0 34.641m-20-11.547l6.667 3.849 6.666 3.849L0 34.641m0-23.094l20 11.547v23.094L0 57.735l-6.667-3.849-6.666-3.849L-20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L0 42.339m20-3.849L0 50.037m-13.333-23.094v23.094'  stroke-width='1' stroke='hsla(0, 6%, 90%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
}


</style>
