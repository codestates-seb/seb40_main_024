import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let url = 'http://localhost:8000/';

export const getBoard = createAsyncThunk('GET_Board', async () => {
  const res = await axios.get(`${url}board/{board_id}`);
  return res.data;
});

export const getAllBoard = createAsyncThunk('GET_AllBoard', async () => {
  const res = await axios.get(`${url}board?page={page}&size={size}`);
  return res.data;
});

export const addBoard = createAsyncThunk('ADD_Board', async (data) => {
  const res = await axios.post(`${url}board`, data);
  return res.data;
});

export const deleteBoard = createAsyncThunk(
  'DELETE_Board',
  async (board_id) => {
    const res = await axios.delete(`url${board_id}`);
    console.log(res);
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
