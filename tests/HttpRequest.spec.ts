const { test, expect } = require('@playwright/test');

let userid; // Global variable to store created user ID

test("Get users", async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200); // Validate response status
    const users = await response.json();
    console.log(users);
});

test("Create users", async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        headers: { 'Accept': 'application/json' },
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });

    expect(response.status()).toBe(201); // Validate response status

    const res = await response.json();
    userid = res.id; // Store user ID globally
    console.log("Created User:", res);
});

test("Update users", async ({ request }) => {

    const response = await request.put(`https://reqres.in/api/users/${userid}`, {
        headers: { 'Accept': 'application/json' },
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });

    expect(response.status()).toBe(200); // Validate response status
    const updatedUser = await response.json();
    console.log("Updated User:", updatedUser);
});

test("Delete users", async ({ request }) => {
    const response = await request.delete(`https://reqres.in/api/users/${userid}`);
    expect(response.status()).toBe(204); // No content for DELETE
    console.log(`User with ID ${userid} deleted successfully`);
});
