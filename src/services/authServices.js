import axios from "axios";
import { backendUrl } from "../common";

// this service is use for register
export const registerService = async (data) => {
    try {
        const response = await axios.post(
            `${backendUrl}/api/users/register`,
            data
        );
        return {
            status: "success",
            data: response.data,
            message: "User registered successfully",
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response.data,
            message: "Error registering user",
        };
    }
};

// this service is use for login
export const loginService = async (data) => {
    try {
        const response = await axios.post(
            `${backendUrl}/api/users/login`,
            data
        );
        return {
            status: "success",
            data: response.data,
            message: "User logged in successfully",
        };
    } catch (error) {
        return {
            status: "error",
            data: error.response.data,
            message: "Error logging in user",
        };
    }
};
