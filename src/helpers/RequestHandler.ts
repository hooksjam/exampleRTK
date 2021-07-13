import axios, { AxiosInstance } from 'axios'
import { authHeader } from 'helpers/AuthHeader'
import { getApiUrl } from 'helpers/Config'
import { UrlOption } from 'app/types'

const axiosInstance = axios.create({
    baseURL: getApiUrl(),
    headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader(),
        'Access-Control-Allow-Origin': '*',
    },
})

export function getAxiosInstance(): AxiosInstance {
    return axiosInstance
}

export function getOptionString(options: UrlOption): string {
    if (Object.values(options).length > 0) {
        return `?${Object.keys(options).filter((x) => options[x] != null).map((x) => {
            if (typeof options[x] === 'boolean') {
                return `${x}=${options[x] ? 1 : 0}`
            }
            if (Array.isArray(options[x])) {
                const optionGroup: string[] = options[x]
                return `${x}=${optionGroup.join(',')}`
            }

            const optionString: string = options[x]
            return `${x}=${optionString}`
        }).join('&')}`
    }
    return ''
}

export function handleError(error) {
    if (error.response) {
        // Request made and server responded
        throw error.response.data
    } else if (error.request) {
        // The request was made but no response was received
        throw error.request
    } else {
        // Something happened in setting up the request that triggered an Error
        throw error.message
    }
}

export function handleResponse(response) {
    const data = response.data;
    if (response.statusText !== "OK"){
        /*if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            location.reload(true)
        }*/

        throw (data && data.message) || response.statusText
    }
    return data
}
