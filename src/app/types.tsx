export interface UrlOption {
    [key: string]: string | boolean | string[]
}

export type AppState = {
    initialized: boolean
}

// Fix for TS not inferring the root state from the ReturnType<typeof rootReducer>
export type RootState = {
    app: AppState
}
