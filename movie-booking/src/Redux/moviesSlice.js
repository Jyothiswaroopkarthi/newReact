import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async ()=>{
        return fetch('http://localhost:8000/movies')
        .then (response => response.json())
    }
)
export const moviesSlice =createSlice({
    name:'movies',
    initialState:{
        items:[],
        status:null
    },
    extraReducers:{
        [getMovies.pending] :(state)=>{
            state.status='loading'
        },
        [getMovies.fulfilled]:(state,action) =>{
            state.items=action.payload
            state.status='Success'
        },
        [getMovies.rejected]:(state) =>{
            state.status="Failed"
        },
    }
})

export default moviesSlice.reducer