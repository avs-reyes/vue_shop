import axios from 'axios';
import { ref } from "vue";
//import user from '@/assets/constants'


// No pude hacer más para implementar las funcionalidades de Envia.com 
// Ya que parece que están protegidas con CORS y no puedo acceder a ellas, sólo en Postman
export function useShippement(user) {
    const BASE_URL = import.meta.env.VITE_ENVIA_URL;
    const TOKEN = import.meta.env.VITE_ENVIA_TOKEN;
    const loading = ref(false);
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
            return response.data;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
        
    }

    return {
        getQuote,
        loading,

    };
}
