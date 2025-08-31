import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit) => {
    const response = await fetch(`/api/posts/${subreddit}`);
    const json = await response.json();
    return json.data.children.map(({ data }) => ({
        id: data.id,           // unique post ID
        title: data.title,     // post title
        author: data.author,   // post author
        score: data.score,     // upvotes minus downvotes
        url: data.url,         // link or image URL
        selftext: data.selftext, // text content (if any)
        num_comments: data.num_comments, // number of comments
        created_utc: data.created_utc,   // timestamp
        subreddit: data.subreddit,       // subreddit name
    }));

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