import axios from 'axios';
import { describe, it, expect } from 'vitest';

const BASE_URL = 'https://petstore.swagger.io/v2';
describe('User Endpoints', () => {
    let userId;
    const username = `testuser_${Date.now()}`;
    let userEmail = `${username}@example.com`;
    //post request
    it('should create a new user', async () => {
        userId = Date.now();
        const response = await axios.post(`${BASE_URL}/user`, {
            id: userId,
            username,
            firstName: "Test",
            lastName: "User",
            email: userEmail,
            password: "password123",
            phone: "1234567890",
            userStatus: 1
        });
        expect(response.status).toBe(200);
    });
    //get request
    it('should get the user by username', async () => {
        const response = await axios.get(`${BASE_URL}/user/${username}`);
        expect(response.status).toBe(200);
        expect(response.data.username).toBe(username);
        expect(response.data.email).toBe(userEmail);
    });
    //put request
    it('should update the user email', async () => {
        const updatedEmail = `updated_${username}@example.com`;
        const response = await axios.put(`${BASE_URL}/user/${username}`, {
            id: userId,
            username,
            firstName: "Test",
            lastName: "User",
            email: updatedEmail,
            password: "password123",
            phone: "1234567890",
            userStatus: 1
        });
        expect(response.status).toBe(200);

        const updatedUser = await axios.get(`${BASE_URL}/user/${username}`);
        expect(updatedUser.status).toBe(200);
        expect(updatedUser.data.email).toBe(updatedEmail);
        userEmail = updatedEmail;
    });
    //delete request
    it('should delete the user', async () => {
        const response = await axios.delete(`${BASE_URL}/user/${username}`);
        expect(response.status).toBe(200);
    });
});