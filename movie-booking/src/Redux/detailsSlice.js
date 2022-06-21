import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"


export const getMoviesDetails=createAsyncThunk(
    'details/getMovies',
    async(id) =>{
        return fetch(`http://localhost:8000/movies/${id}`)
        .then(response =>response.json())
    }
)

export const detailsSlice=createSlice({
    name:"details",
    initialState:{
        items:[],
        status:null
    },
    extraReducers:{
        [getMoviesDetails.pending]:(state) =>{
            state.status='loading'
        },
        [getMoviesDetails.fulfilled]:(state,action) =>{
            state.items =action.payload
            state.status="success"
        },
        [getMoviesDetails.rejected]:(state)=>{
            state.status='Failed'
        },
    }
})

export default detailsSlice.reducer