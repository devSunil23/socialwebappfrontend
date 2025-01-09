import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/authServices"; // Ensure this service is implemented

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle login form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await loginService({
            email,
            password,
        });

        if (res.status === "success" && res.data.token) {
            // Store token in localStorage
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("userId", res.data.userId);
            localStorage.setItem("userName", res.data.userName);
            // Navigate to home or dashboard page after successful login
            navigate("/");
        } else {
            // Show error message if login fails
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-2xl mb-4">Login</h2>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block mb-2">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block mb-2">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded">
                    Login
                </button>

                {/* Register Redirect */}
                <p className="text-center mt-4">
                    <span>If you don't have an account, </span>
                    <a
                        href="/register"
                        className="text-blue-500 hover:underline">
                        register here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
