import '../PostCard.css';
function PostCard({}){
    return (
        <div className="post-card-wrapper">
            <div className="post-card-container">
                <div className="votes">
                    <div className="votes-wrapper">
                        <i className="fas fa-arrow-up"></i>
                        <span>123</span>
                        <i className="fas fa-arrow-down"></i>
                    </div>
                </div>
                <div className="title">
                    <h1>title</h1>
                </div>
                <div className="image">
                    <h2>image</h2>
                </div>
                <div className="post-data">
                    <span>posted by</span>
                    <span>7 hours ago</span>
                    <span>700</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard;