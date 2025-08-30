import '../PostCard.css';
function PostCard({}){
    return (
        <div className="post-card-container">
            <div className="votes-and-content">
                <div className="votes">
                    <i className="fas fa-arrow-up"></i>
                    <span>123</span>
                    <i className="fas fa-arrow-down"></i>
                </div>
                <div className="content">
                    <h1>content</h1>
                </div>
            </div>
            <div className="image">
                <h1>image</h1>
            </div>
        </div>
    )
}

export default PostCard;