import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setMessages } from 'app/utils/translator'



const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    languageData: [],
}

export const loadLanguage = createAsyncThunk(
    'languageData/loadLanguage',
    async () => {
        return fetch('http://localhost:3001/resources/language.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => {
                return response.json().then((jsonData) => {
                  console.log('DATA ::', jsonData)
                    setMessages(jsonData)
                })
            })
            .catch((error) => {
                return error
            })
    }
)

const languageDataSlice = createSlice({
    name: 'languageData',
    initialState,
    reducers: {},
    extraReducers: {
        [loadLanguage.pending]: (state, action) => {
            state.loading = true
            state.error = false
        },
        [loadLanguage.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.languageData = action.payload.data
        },
        [loadLanguage.rejected]: (state, action) => {
            state.loading = false
            state.error = false
            state.errorMessage = action.error.message
        },
    },
})

export const languageDataSelector = (state) => state.languageData
export default languageDataSlice.reducer
