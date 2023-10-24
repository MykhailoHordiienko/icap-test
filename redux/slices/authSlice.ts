import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { logInUser } from '../operations/authOperations';

type InitialType = {
  username: null | string;
  error: null | string;
  isLoggedIn: boolean;
};

const initialState: InitialType = {
  username: null,
  isLoggedIn: false,
  error: null,
};

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logInUser.pending, state => {
        state.error = null;
        state.username = null;
        state.isLoggedIn = false;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
        state.username = action.payload.username;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.username = null;
        state.isLoggedIn = false;
      });
  },
});
