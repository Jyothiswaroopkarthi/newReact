import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticated: false,
    },
    reducers:{
        authenticate :(state)=>{
            state.isAuthenticated = !state.isAuthenticated
            //state.status= successfully user verifed
        }
    }
})

export const {authenticate}= authSlice.actions
export default authSlice.reducer