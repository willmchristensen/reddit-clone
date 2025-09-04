import './PostCard.css';
import {timeSince} from '../../Utils//timeSince';
import {Link} from 'react-router-dom';
function PostCard({post}){
    return (
        <Link to={`/posts/${post.subreddit}/${post.id}`}>
            <div className="post-card-wrapper">
                <div className="post-card-container">
                    <div className="votes">
                        <div className="votes-wrapper">
                            <i className="fas fa-arrow-up"></i>
                            <span>{post.score.toLocaleString()}</span>
                            <i className="fas fa-arrow-down"></i>
                        </div>
                    </div>
                    <div className="title">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="image">
                        <img className="post-image" src={post.url}/>
                    </div>
                    <div className="post-data">
                        <span>posted by {post.author}</span>
                        <span>{timeSince(post.created_utc)}</span>
                        <span>{post.num_comments.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard;