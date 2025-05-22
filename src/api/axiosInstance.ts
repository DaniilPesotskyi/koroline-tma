import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
});

export const telegram = axios.create({
    baseURL: `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}`
})