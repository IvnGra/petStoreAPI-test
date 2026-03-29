PetStore API Test Report

Test Framework
- Runner: Vitest
- HTTP client: Axios
- Environment: Tests run against the public PetStore API at https://petstore.swagger.io/v2

Test Scenarios
- Pet endpoints
	- Create pet
	- Get pet by ID
	- Update pet status
	- Delete pet
- User endpoints
	- Create user
	- Get user by username
	- Update user email
	- Delete user
- Store endpoints
	- Create order
	- Get order by ID
	- Delete order

Endpoints Tested
- POST /pet
- GET /pet/{petId}
- PUT /pet
- DELETE /pet/{petId}
- POST /user
- GET /user/{username}
- PUT /user/{username}
- DELETE /user/{username}
- POST /store/order
- GET /store/order/{orderId}
- DELETE /store/order/{orderId}

Observations And Issues
- Base URL must be https://petstore.swagger.io/v2. Using /swagger.json as base returns 404 for endpoint calls.
- User create and update endpoints return an ApiResponse object (code, type, message), not the full user payload.
- Because of that response shape, assertions like response.data.username or response.data.email on POST/PUT can fail with undefined.
- Correct validation for user fields should be done with a follow-up GET /user/{username}.
- Reusing a fixed username can cause conflicts across runs; unique usernames per run are more reliable.
- Tests depend on a live external service, so occasional instability can happen due to network or remote API behavior.
