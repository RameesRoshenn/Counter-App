import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store =configureStore({
    reducer:{
        //reducer is coming from counterSlice since we are export reducer as export default
        counter:counterSlice

    }
})

export default store