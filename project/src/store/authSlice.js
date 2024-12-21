import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name : "name",
    initialState,
    reducers:{

    }
})



export default authSlice.reducer;
