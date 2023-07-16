import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: [],
    newDisney: [],
    originals: [],
    trending: [],
}

export default createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.originals = action.payload.originals;
            state.trending = action.payload.trending;
        }
    }
})