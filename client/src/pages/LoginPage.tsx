import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../ApiConfig.ts";

interface Error {
    message: string;
}

const LoginPage = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setResponseMessage(null);

        try {
            const response = await axios.post(`${API_BASE_URL}auth/login`, formData, {
                withCredentials: true,
            });

            setResponseMessage(response.data.message);

        } catch (error) {
            console.log(error);
            setError(
                error.response.data.message ||
                "An error occurred during login. Please try again.",
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {error && <p className="text-red-500">{error.message}</p>}
                {responseMessage && <p className="text-green-500">{responseMessage}</p>}

                <button
                    type="submit"
                    className={`blue-button mt-4 w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={loading}
                >
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LoginPage;