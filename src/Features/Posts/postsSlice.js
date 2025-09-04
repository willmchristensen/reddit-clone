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

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async ({ subreddit, id }) => {
    const response = await fetch(`/api/posts/${subreddit}/${id}`);
    const json = await response.json();

    const data = json[0]?.data?.children[0]?.data; // Reddit API wraps posts

    return {
      id: data.id,
      title: data.title,
      author: data.author,
      score: data.score,
      url: data.url,
      selftext: data.selftext,
      num_comments: data.num_comments,
      created_utc: data.created_utc,
      subreddit: data.subreddit,
    };
  }
);


const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: null,   // <-- add this
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchPosts (list of posts)
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // fetchPostById (single post)
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedPost = action.payload; // store single post
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;