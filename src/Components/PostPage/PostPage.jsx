import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostById} from '../../Features/Posts/postsSlice';

function PostPage(){
    const {subreddit,id} = useParams();
    const dispatch = useDispatch();
    const singlePost = useSelector(state => state.posts.selectedPost);
    console.log(singlePost);
    useEffect(() => {
        dispatch(fetchPostById({subreddit, id}))
    }, [dispatch, id])
    if(!singlePost) return null;
    return (
        <div className="post-page-container">
            <h1>{singlePost.title}</h1>
            <ul>
                {
                    Object.entries(singlePost).map(([key,value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PostPage;