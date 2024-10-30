import { createSlice } from "@reduxjs/toolkit";


const initialState: User| null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      },
      updateUser: (state, action) => {
        state = action.payload;
      },
      updateUserPartial: (state, action) => {
          if (state) {
            return state = { ...state, ...action.payload };
          }

          return state;
      },
        deleteUser: (state) => {
            state = null;
      },
      getUser: (state) => {
            return state;
        },
        
  },
});


export const { setUser, updateUser, updateUserPartial, deleteUser, getUser } = userSlice.actions;

