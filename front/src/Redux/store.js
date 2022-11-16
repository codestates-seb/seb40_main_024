import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getaxios = createAsyncThunk('GET', async () => {
  const url = 'http://localhost:8000/test';
  const response = await axios.get(url);
  return response.data;
});

export const getdata = createSlice({
  name: 'getaxios',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getaxios.fulfilled]: (state, { payload }) => [...payload],
  },
});
