import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
// import { sub } from 'date-fns';

import { client } from '../../api/client';

const initialState = {
   posts: [],
   status: 'idle',
   error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
   const response = await client.get('/fakeApi/posts');
   return response.data;
});

export const addNewPost = createAsyncThunk(
   'posts/addNewPost',
   async (initialPost) => {
      const response = await client.post('fakeApi/posts', initialPost);
      return response.data;
   }
);

const postsSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {
      postAdded: {
         reducer(state, action) {
            state.posts.push(action.payload);
         },

         prepare(title, content, userId) {
            return {
               payload: {
                  id: nanoid(),
                  date: new Date().toISOString(),
                  title,
                  content,
                  user: userId,
                  reactions: {
                     thumbsUp: 0,
                     hooray: 0,
                     heart: 0,
                     rocket: 0,
                     eyes: 0,
                  },
               },
            };
         },
      },

      postUpdated(state, action) {
         const { id, title, content } = action.payload;
         const exisitingPost = state.posts.find((post) => post.id === id);

         if (exisitingPost) {
            exisitingPost.title = title;
            exisitingPost.content = content;
         }
      },

      reactionAdded(state, action) {
         const { postId, reaction } = action.payload;
         const exisitingPost = state.posts.find((post) => post.id === postId);

         if (exisitingPost) {
            exisitingPost.reactions[reaction]++;
         }
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = state.posts.concat(action.payload);
         })
         .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         });
      builder.addCase(addNewPost.fulfilled, (state, action) => {
         state.posts.push(action.payload);
      });
   },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
   state.posts.posts.find((post) => post.id === postId);
