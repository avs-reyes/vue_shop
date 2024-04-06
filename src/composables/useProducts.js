import axios from 'axios';
import { ref } from "vue";

export function useProducts() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const TOKEN = import.meta.env.VITE_ACCESS_TOKEN
    const loading = ref(false);
    const products = ref();

    // Este fetch devuelve productos que esten en "active:true". El getProducts de hace que está comentado devuelve
    // todos los productos
    async function getProducts() {
        console.log('hola');
        loading.value = true;
        try {
            const config = { headers: { 'Authorization': `Bearer ${TOKEN}` } };
            const response = await axios.get(BASE_URL, config);
            console.log(response.data);
            loading.value = false;

            // Filtrar los productos con 'active' en true
            const activeProducts = response.data.products.filter(product => product.status.active === 'true');

            products.value = activeProducts;
            return activeProducts;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }


    // async function getProducts() { 
    //     console.log('hola')
    //     loading.value = true;
    //     try {
    //         const config = {headers: {'Authorization': `Bearer ${TOKEN}`}};
    //         const response = await axios.get(BASE_URL,config);
    //         console.log(response.data)
    //         loading.value = false;
    //         products.value = response.data.products
    //         return response.data.products;
    //     } catch (error) {
    //         console.error('Error fetching product:', error);
    //         throw error;
    //     }

    // }


    async function getProductById(productId) {
        try {
            const response = await axios.get(`/api/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }
    return {
        getProducts,
        getProductById,
        loading,
        products,
    };
}
