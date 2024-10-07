const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BE_SERVER_BASE_URL,
});

export const newUser = async (name, email, password) => {
    try {
        const res = await apiClient.post(
            '/register',
            { name, email, password }
        );
        return res.data;
    } catch (error) {
        console.error('Error registering new user:', error);
        throw error;
    }
};
