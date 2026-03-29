import axios from 'axios';
import { describe, it, expect } from 'vitest';

const BASE_URL = 'https://petstore.swagger.io/v2';

describe('Pet Endpoints', () => {
  let petId;
    //post request
  it('should create a new pet', async () => {
    const response = await axios.post(`${BASE_URL}/pet`, {
      id: Date.now(),
      name: "Fluffy",
      status: "available"
    });
    petId = response.data.id;
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("Fluffy");
  });
  //get request
  it('should get the pet by ID', async () => {
    const response = await axios.get(`${BASE_URL}/pet/${petId}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(petId);
  });
  //put request
  it('should update the pet status', async () => {
    const response = await axios.put(`${BASE_URL}/pet`, {
      id: petId,
      name: "Fluffy",
      status: "sold"
    });
    expect(response.status).toBe(200);
    expect(response.data.status).toBe("sold");
  });
  //delete request
  it('should delete the pet', async () => {
    const response = await axios.delete(`${BASE_URL}/pet/${petId}`);
    expect(response.status).toBe(200);
  });
});