import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {
    createPostService,
    getAllPostsService,
} from "../services/postServices";
import { addLikeService, removeLikeService } from "../services/likeServices";
import { followService } from "../services/followServices";

const HomePage = () => {
    const token = localStorage.getItem("authToken");
    const navigate = useNavigate(); // React Router hook for navigation

    const [posts, setPosts] = useState([]);

    // Function to get all posts
    const getAllPostFunc = async () => {
        const res = await getAllPostsService(token);
        if (res.status === "success") {
            console.log("posts", res.data);
            setPosts(res.data);
        }
    };

    useEffect(() => {
        getAllPostFunc();
    }, []);

    // Handle creating a new post
    const handlePostCreate = (data) => {
        const { title, content } = data;
        const postData = {
            title: title,
            content: content,
        };
        const createPost = async () => {
            const res = await createPostService(postData, token);
            if (res.status === "success") {
                getAllPostFunc();
            }
        };
        createPost();
    };

    // Handle liking a post
    const handleLike = async (postId) => {
        const response = await addLikeService({ post_id: postId }, token);
        if (response.status === "success") {
            getAllPostFunc();
        }
    };

    // Handle unliking a post
    const handleUnlike = async (postId) => {
        const response = await removeLikeService({ post_id: postId }, token);
        if (response.status === "success") {
            getAllPostFunc();
        }
    };

    // Handle following a user
    const handleFollow = async (followeeId) => {
        const response = await followService(
            { followee_id: followeeId },
            token
        );

        if (response.status === "success") {
            getAllPostFunc();
        }
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Clear the auth token
        localStorage.removeItem("userId"); // Clear the user id
        localStorage.removeItem("userName"); // Clear the user name
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Home Feed</h1>
                <button
                    onClick={handleLogout}
                    className="text-sm bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                    Logout
                </button>
            </div>
            <PostForm onPostCreate={handlePostCreate} />
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={handleLike}
                    onUnlike={handleUnlike}
                    onFollow={handleFollow}
                />
            ))}
        </div>
    );
};

export default HomePage;
