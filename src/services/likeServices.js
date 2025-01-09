// this service is used for liking a post

import axios from "axios";
import { backendUrl } from "../common";

export const addLikeService = async (data, token) => {
    try {
        const response = await axios.post(
            `${backendUrl}/api/likes/addLike`,
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
            message: "Like added successfully",
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response.data,
            message: "Error adding like",
        };
    }
};

// this service is used for removing a like
export const removeLikeService = async (data, token) => {
    console.log("token", token);
    try {
        const response = await axios.post(
            `${backendUrl}/api/likes/removeLike`,
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
            message: "Like removed successfully",
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response.data,
            message: "Error removing like",
        };
    }
};
