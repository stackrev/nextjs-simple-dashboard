/**
 * Next js configuration
 */
module.exports = {
    future: {
        webpack5: true,
    },
    publicRuntimeConfig: {
        apiKey: process.env.API_KEY,
        apiUrl: process.env.API_BASE_URL,
    },
};
