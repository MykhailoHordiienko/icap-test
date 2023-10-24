import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const BASE_URL = process.env.BASE_URL;

export const logInUser = createAsyncThunk<
  ResponseUser,
  RequestUser,
  { rejectValue: string }
>(
  'auth/login',

  async (userData, thunkAPI) => {
    const toastId = toast.loading('Loading...');

    const response = await fetch(`${BASE_URL}login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      cache: 'no-store',
    });

    if (!response.ok) {
      toast.dismiss(toastId);

      toast.error(`${response.statusText}`);
      return thunkAPI.rejectWithValue(response.statusText);
    }

    toast.dismiss(toastId);
    toast.success('Welcome!');

    const data = await response.json();

    return { data, username: userData.username };
  }
);
