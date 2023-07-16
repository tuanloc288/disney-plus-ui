import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice";
import movieSlice from "../feature/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    movie: movieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
