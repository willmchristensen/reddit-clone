import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit) => {
    const response = await fetch(`/api/posts/${subreddit}`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default postsSlice.reducer;