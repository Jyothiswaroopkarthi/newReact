import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
    "slider/getMovies",
    async ()=>{
        return fetch(`http://localhost:8000/slider`)
                .then(response =>response.json())
    }
)
export const sliderSlice = createSlice({
    name:"slider",
    initialState:{
        items:[],
        status:null
    },
    extraReducers:{
        [getMovies.pending] :(state) =>{
            state.status='loading'
        },
        [getMovies.fulfilled] :(state,action) =>{
            state.items=action.payload
            state.status='Sucess'
            console.log("updated items",state.items)
        },
        [getMovies.rejected]:(state) =>{
            state.status = 'failed'
        },
    }
})

export default sliderSlice.reducer