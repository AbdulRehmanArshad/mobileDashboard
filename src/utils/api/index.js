import Axios from 'axios'

export const httpClient = Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
})