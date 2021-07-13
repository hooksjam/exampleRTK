import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { loadApp } from 'services/appServices'
import { AxiosError } from 'axios'
import { RootState, AppState } from 'app/types'

const initialState: AppState = {
    initialized: false,
}

type ValidationErrors = {
    errorMessage: string,
    fieldErrors: Record<string, string>
}

export const load = createAsyncThunk<
    string,
    string,
    { state: RootState, rejectValue: ValidationErrors }
>(
    'app/load',
    async (appID, { rejectWithValue }) => {
        try {
            const response = await loadApp(appID)
            return response.data
        } catch (err) {
            const error: AxiosError<ValidationErrors> = err
            if (!error.response) {
                throw err
            }
            return rejectWithValue(error.response.data)
        }
    },
)

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        loadAlt: (state) => {
            // pass
        },
    },
    extraReducers: (builder) => {
        builder.addCase(load.fulfilled, (state, action) => {
            state.initialized = true
            console.log('TEST', action)
        })
        /* builder.addCase(load.rejected, (state, action) => {
            //
        }) */
    },
})

// export const { load } = actions
export default appSlice.reducer
