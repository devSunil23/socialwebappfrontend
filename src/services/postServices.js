import axios from "axios";
import { backendUrl } from "../common";

// this function ise used for create post
export const createPostService = async (data, token) => {
    try {
        const response = await axios.post(
            `${backendUrl}/api/posts/create`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return {
            status: "success",
            data: response.data,
            message: "Post created successfully",
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response.data,
            message: "Error creating post",
        };
    }
};

// this function is used for get all posts
export const getAllPostsService = async (token) => {
    try {
        const response = await axios.get(`${backendUrl}/api/posts/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return {
            status: "success",
            data: response.data,
            message: "Posts fetched successfully",
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response.data,
            message: "Error fetching posts",
        };
    }
};
