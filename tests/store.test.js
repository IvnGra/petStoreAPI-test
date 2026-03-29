import axios from 'axios';
import { describe, it, expect } from 'vitest';

const BASE_URL = 'https://petstore.swagger.io/v2';

describe('Store Endpoints', () => {
    let orderId;
    //post request 
    it('should create a new order for a pet', async () => {
        const response = await axios.post(`${BASE_URL}/store/order`, {
            id: Date.now(),
            petId: 12345,
            quantity: 1,
            shipDate: new Date().toISOString(),
            status: "placed",
            complete: false
        });
        orderId = response.data.id;
        expect(response.status).toBe(200);
        expect(response.data.petId).toBe(12345);
    });
    //get request
    it('Get the order by ID', async () => {
        const response = await axios.get(`${BASE_URL}/store/order/${orderId}`);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(orderId);
    });
    //delete request
    it('Delete the order', async () => {
        const response = await axios.delete(`${BASE_URL}/store/order/${orderId}`);
        expect(response.status).toBe(200);
    });
});