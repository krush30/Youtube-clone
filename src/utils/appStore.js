import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./show"
const appStore = configureStore({
    reducer: {
        show: showReducer
    }

})

export default appStore;