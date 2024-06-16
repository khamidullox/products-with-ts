import { configureStore } from "@reduxjs/toolkit";
import amoutReducer from "./amoutSlice";
export const store = configureStore({
  reducer: {
    counter: amoutReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
