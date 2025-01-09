// this service is used for following a user

import axios from "axios";
import { backendUrl } from "../common";

export const followService = async (data, token) => {
    try {
        const response = await axios.post(
            `${backendUrl}/api/follows/follow`,
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
            message: "Followed successfully",
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response.data,
            message: "Error following user",
        };
    }
};
