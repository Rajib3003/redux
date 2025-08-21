
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middleware/logger";
import taskReducer  from "./features/task/taskSlice";
import userReducer from "./features/task/userSlice";
export const store = configureStore({
    reducer: {
        counter : counterReducer,
        todo : taskReducer,
        todoUser : userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;