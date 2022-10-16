import { httpClient } from "../../../utils"

export const register = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post('user/register', values)
        cbSuccess(data)
    } catch (error) {
        console.log('error', error.message)
        cbFailure(error.message)
    }
}

export const login = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post('user/login', values)
        cbSuccess(data)
    } catch (error) {
        console.log('error', error.message)
        cbFailure(error.message)
    }
}