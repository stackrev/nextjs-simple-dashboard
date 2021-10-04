import axios from 'axios';

export const baseURL = process.env.API_BASE_URL || 'https://newsapi.org/v2';
export const apiKey = `apiKey=${process.env.API_KEY}`;

export const http = axios.create({
    baseURL,
});

export const httpGet = async (url: string) => {
    try {
        return await axios.get(gUrl(url));
    } catch (error) {
        throw error;
    }
};

function gUrl(url: string) {
    let key = `?${apiKey}`;
    if (url.includes('?')) {
        key = key.replace('?', '&');
    }
    return baseURL + url + key;
}
