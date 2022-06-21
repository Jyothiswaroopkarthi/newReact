import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies=createAsyncThunk(
    'movies/getMovies',
    async()=>{
        return fetch (`http://localhost:8000/movies`)
        .then(response =>response.json())
    }
    
)

export const movieSlice = createSlice({
    name:'movie',
    initialState:{
        items:[],
        status:null
    },
    extraReducers:{
        [getMovies.pending] :(state) =>{
            state.status='loading'
        },
        [getMovies.fulfilled] :(state) =>{
            state.items = action.payload
            state.status='success'

        },
        [getMovies.rejected] :(state) =>{
            state.status='rejected'
        },

    }
})

export default movieSlice.reducer