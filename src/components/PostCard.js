import React from "react";

const PostCard = ({ post, onLike, onUnlike, onFollow }) => {
    return (
        <div className="border p-4 mb-4 rounded">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{post?.title}</span>
                {post.followed_by_user > 0 ? (
                    ""
                ) : (
                    <button
                        onClick={() => onFollow(post?.user_id)}
                        className="text-blue-500 hover:underline">
                        Follow
                    </button>
                )}
            </div>
            <p className="mb-2">{post.content}</p>
            <div className="flex justify-between items-center">
                <button
                    onClick={() =>
                        post?.liked_by_user > 0
                            ? onUnlike(post.id)
                            : onLike(post.id)
                    }
                    className={`px-4 py-2 rounded ${
                        post.liked_by_user > 0
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}>
                    {post?.liked_by_user > 0 ? "Liked" : "Like"}
                </button>
            </div>
        </div>
    );
};

export default PostCard;
