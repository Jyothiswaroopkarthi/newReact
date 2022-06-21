import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovieDetails = createAsyncThunk(
    "details/getMovies",
    async(id)=>{
        return fetch(`http://localhost:8000/movies/${id}`)
                .then(response => response.json())
    }
)

export const detailsSlice = createSlice({
    name:"details",
    initialState:{
        items:[],
        status:null
    },
    extraReducers:{
        [getMovieDetails.pending] :(state) =>{
            state.status = "loading"
        },
        [getMovieDetails.fulfilled] :(state,action) =>{
            state.items=action.payload
            state.status ="success"
        },
        [getMovieDetails.rejected] :(state) =>{
            state.status ="Failed"
        }
    }
})

export default detailsSlice.reducer