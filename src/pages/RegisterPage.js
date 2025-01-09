import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services/authServices";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle register form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await registerService({
            username,
            password,
            email,
        });
        if (res.status === "success") {
            navigate("/login");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-2xl mb-4">Register</h2>

                {/* Username Field */}
                <div className="mb-4">
                    <label className="block mb-2">
                        Username <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>

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
                    Register
                </button>

                {/* Login Redirect */}
                <p className="text-center mt-4">
                    <span>If you have already registered, </span>
                    <a href="/login" className="text-blue-500 hover:underline">
                        please login
                    </a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
