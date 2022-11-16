import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let url = 'http://localhost:8000/';

export const getBoard = createAsyncThunk('GET_Board', async () => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
});

export const addBoard = createAsyncThunk('ADD_Board', async (data) => {
  const res = await axios.post(url, data);
  console.log(res.data);
  return res.data;
});

export const deleteBoard = createAsyncThunk(
  'DELETE_Board',
  async (board_id) => {
    const res = await axios.delete(`url${board_id}`);
    console.log(res.data);
    return res.data;
  }
);

export const BoardAPI = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getBoard.fulfilled]: (state, { payload }) => [...payload],
    [addBoard.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteBoard.fulfilled]: (state, { payload }) =>
      state.filter((Board) => Board.id !== payload),
  },
});
