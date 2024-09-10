const axios = require('axios');

describe('Create Account API Test', () => {
    it('Test to ensure user registeration via the API is successful', async () => {
        const timestamp = Date.now();
        const email = `user${timestamp}@yopmail.com`;
        const response = await axios.put('https://my.amega.finance/client-api/registration', {
            "email": email,
            "password": "P@ssword1",
            "firstName": "Ben",
            "lastName": "Troy",
            "document_group_1": true,
            "country": "NG",
            "customFields": {
                "custom_app_registration": false
            }
        });

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id');
    });

    it('Test to ensure registering with an existing email via the API fails with 400', async () => {
        try{
            const response = await axios.put('https://my.amega.finance/client-api/registration', {
                "email": "abioyeobaloluwapeter@gmail.com",
                "password": "P@ssword1",
                "firstName": "Ben",
                "lastName": "Troy",
                "document_group_1": true,
                "country": "NG",
                "customFields": {
                    "custom_app_registration": false
                }
            });
        }catch(error){
            expect(error.response.status).toBe(400);
        }
    });

    it('Test to ensure registering with an invalid email format via the API fails with 400', async () => {
        try{
            const response = await axios.put('https://my.amega.finance/client-api/registration', {
                "email": "abioyeobalolu.com",
                "password": "P@ssword1",
                "firstName": "Ben",
                "lastName": "Troy",
                "document_group_1": true,
                "country": "NG",
                "customFields": {
                    "custom_app_registration": false
                }
            });
        }catch(error){
            expect(error.response.status).toBe(400);
        }
    });

    it('Test to ensure registering without an email via the API fails with 400', async () => {
        try{
            const response = await axios.put('https://my.amega.finance/client-api/registration', {
                "email": null,
                "password": "P@ssword1",
                "firstName": "Ben",
                "lastName": "Troy",
                "document_group_1": true,
                "country": "NG",
                "customFields": {
                    "custom_app_registration": false
                }
            });
        }catch(error){
            expect(error.response.status).toBe(400);
        }
    });

    it('Test to ensure registering without a password via the API fails with 400', async () => {
        try{
            const response = await axios.put('https://my.amega.finance/client-api/registration', {
                "email": "abioyeobaloluwapeter@gmail.com",
                "password": null,
                "firstName": "Ben",
                "lastName": "Troy",
                "document_group_1": true,
                "country": "NG",
                "customFields": {
                    "custom_app_registration": false
                }
            });
        }catch(error){
            expect(error.response.status).toBe(400);
        }
    });

})