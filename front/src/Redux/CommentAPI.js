// import axios from 'axios';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// let url = 'https://ec94-125-182-77-122.jp.ngrok.io/';

// export const getComment = createAsyncThunk('GET_Comment', async () => {
//   const res = await axios.get(`${url}comment`);
//   return res.data;
// });

// // export const Comment = createAsyncThunk('POST_Comment', async () => {
// //   const res = await axios.get(`${url}comment`);
// //   return res.data;
// // });

// export const addComment = createAsyncThunk('ADD_Comment', async (data) => {
//   const res = await axios.post(`${url}`, data);

//   return res.data;
// });

// export const deleteComment = createAsyncThunk(
//   'DELETE_Comment',
//   async (comment_id) => {
//     const res = await axios.delete(`url${comment_id}`);
//     console.log(res.data);
//     return res.data;
//   }
// );

// export const CommentSlice = createSlice({
//   name: 'CommentAPI',
//   initialState: [],
//   reducers: {},
//   extraReducers: {
//     [getComment.fulfilled]: (state, { payload }) => [...payload],
//     [addComment.fulfilled]: (state, { payload }) => [...state, payload],
//     [deleteComment.fulfilled]: (state, { payload }) =>
//       state.filter((Comment) => Comment.id !== payload),
//   },
// });
