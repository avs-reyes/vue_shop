import axios from 'axios';
import { ref } from "vue";
//import user from '@/assets/constants'

export function useShippement(user) {
    const BASE_URL = import.meta.env.VITE_ENVIA_URL;
    const TOKEN = import.meta.env.VITE_ENVIA_TOKEN;
    const loading = ref(false);
    const products = ref();
    const postData = user;
    async function getQuote() { 
        loading.value = true;
        try {
            const headers = {
                "Authorization": TOKEN,  
                "Access-Control-Allow-Origin": "*"
            }
        
            const response = await axios.post(BASE_URL,postData,headers);
            console.log(response.data)
            loading.value = false;
            products.value = response.data.products
            return response.data.products;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
        
    }

    return {
        getQuote,
        loading,
        products,
    };
}
