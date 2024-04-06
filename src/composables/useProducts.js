import axios from 'axios';
import { ref } from "vue";

export function useProducts() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const TOKEN = import.meta.env.VITE_ACCESS_TOKEN
    const loading = ref(false);
    const products = ref();

    async function getProducts() { 
        console.log('hola')
        loading.value = true;
        try {
            const config = {headers: {'Authorization': `Bearer ${TOKEN}`}};
            const response = await axios.get(BASE_URL,config);
            console.log(response.data)
            loading.value = false;
            products.value = response.data.products
            return response.data.products;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
        
    }

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
