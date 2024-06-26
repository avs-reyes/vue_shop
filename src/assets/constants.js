import { ref, computed } from 'vue';

export const user = ref({
    "origin": {
        "name": "Alex",
        "company": "envia",
        "email": "noreply@envia.com",
        "phone": "8110000ewdased000",
        "street": "shreeji sadan 24 bhandarkar rd",
        "number": "opposite matunga kabutar khana",
        "district": "",
        "city": "Monterrey",
        "state": "NL",
        "category": 1,
        "country": "MX",
        "postalCode": "66236",
        "reference": "",
        "coordinates": {
            "latitude": "19.027686",
            "longitude": "72.853462"
        }
    },
    "destination": {
        "name": "new delhi",
        "company": "new delhi",
        "email": "new@delhi.com",
        "phone": "8180000000",
        "street": "yashwant place commercial complex",
        "number": "123",
        "district": "",
        "city": "Monterrey",
        "state": "OA",
        "category": 1,
        "country": "MX",
        "postalCode": "709888",
        "reference": "",
        "coordinates": {
            "latitude": "28.578938",
            "longitude": "77.165053"
        }
    },
    "packages": [
        {
            "content": "shoes",
            "boxCode": "",
            "amount": 1,
            "type": "box",
            "weight": 1,
            "insurance": 0,
            "declaredValue": 0,
            "weightUnit": "KG",
            "lengthUnit": "CM",
            "dimensions": {
                "length": 11,
                "width": 15,
                "height": 20
            }
        }
    ],
    "shipment": {
        "carrier": "fedex",
        "service": "ground",
        "type": 1
    },
    "settings": {
        "printFormat": "PDF",
        "printSize": "STOCK_4X6",
        "currency": "USD",
        "cashOnDelivery" :"1000.00",
        "comments": ""
    },
    "additionalServices": []
});


export default user;