import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
    loading: false,
    hasError: false,
    students: {
        firstName: '',
        lastName: '',
        class: '',
        aadharNumber: '',
        dob: '',
        placeOfBirth: '',
        state: '',
        nationality: '',
        religion: '',
        gender: '',
        caste: '',
        address: '',
        bloodGroup: '',
        pinCode: '',
        mobile: ''
    },
}

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        getStudents: (state) => {
            state.loading = true
          },
          getStudentsSuccess: (state,{payload}) => {
            state.students = payload
            state.loading = false
            state.hasError =false
          },
          getStudentsFailuer: (state) => {
              state.loading = false
              state.hasError = true
          }
    }
})

// Action creators are generated for each case reducer function
export const { getStudents, getStudentsSuccess, getStudentsFailuer } = studentsSlice.actions
export const studentsSliceSelector = (state)=> state.students
export default studentsSlice.reducer;

//API call can be done here
export const getStudentsData = () =>{
    axios.get("http://localhost:3001/student/list-students").then((response)=>{
            console.log("Response ::", response)
        });
}

//Get data
export const getFilteredStudentsData = (values) =>{
    return (dispatch) =>{
        dispatch(getStudentsSuccess(values))
    }
}