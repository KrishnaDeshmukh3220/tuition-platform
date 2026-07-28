const BASE_URL = 'http://localhost:8080/api';

export const authAPI = {
    register: async (data) => {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    },

    login: async (data) => {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    }
};

export const tutorAPI = {
    getAllTutors: async () => {
        const response = await fetch(`${BASE_URL}/tutors`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        return response;
    },

    searchTutors: async (subject, location) => {
        const response = await fetch(
            `${BASE_URL}/tutors/search?subject=${subject}&location=${location}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        return response;
    }
};