import { createSlice } from "@reduxjs/toolkit";
import { playlist } from "../../public/data/playlist.json";

const initialState = {
    playlist,
    indexPlaylist: 0,
};

export const playerAudio = createSlice({
    name: "playerAudio",
    initialState,
    reducers: {
        nextIndexPlaylist: (state) => {
            if (state.indexPlaylist + 1 === state.playlist.length)
                state.indexPlaylist = 0;
            else state.indexPlaylist++;
        },
        previousIndexPlaylist: (state) => {
            if (state.indexPlaylist === 0) state.indexPlaylist = 4;
            else state.indexPlaylist--;
        },
        updateIndexPlaylist: (state, action) => {
            state.indexPlaylist = state.playlist
                .map((obj) => obj.id === action.payload)
                .indexOf(true);
        },
    },
});

export const { nextIndexPlaylist, previousIndexPlaylist, updateIndexPlaylist } =
    playerAudio.actions;
export default playerAudio.reducer;
