import { configureStore } from "@reduxjs/toolkit";
import playerAudio from "./features/playerAudio";

export const store = configureStore({
    reducer: {
        playerAudio,
    },
});
