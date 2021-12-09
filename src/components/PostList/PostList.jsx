import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = () => {
    return (
        <div className="post__list">
            <PostItem />
            <PostItem />
        </div>
    )
}

export default PostList;