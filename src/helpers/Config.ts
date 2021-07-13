/* globals process */
export function getApiUrl(): string {
    return `${process.env.API_URL}/api`
}

export function getAppPath(): string {
    if (process.env.APP_PATH) {
        return process.env.APP_PATH
    }
    return ''
}

export function getAssetPath(): string {
    return `${getAppPath()}/assets/`
}
