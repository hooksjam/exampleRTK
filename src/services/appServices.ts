import { getAxiosInstance } from 'helpers/RequestHandler'
import { AxiosResponse } from 'axios'

export type AppData = {
    id: string
}

interface LoadAppResponse {
    data: AppData
    success: boolean
}

export async function loadApp(appID:string): Promise<AxiosResponse<LoadAppResponse>> {
    return getAxiosInstance().get(`/app?appid=${appID}`)
}

export async function loadAppB(appID:string) {
    return getAxiosInstance().get(`/app?${appID}`)
}
