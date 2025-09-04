import PostCard from '../PostCard/PostCard'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../../Features/Posts/postsSlice';

function Posts(){
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    useEffect(() => {
        dispatch(fetchPosts('all'));
    }, [dispatch])
    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <PostCard 
                            post={post}
                        />
                    )
                })
            }
        </>
    )
}

export default Posts;