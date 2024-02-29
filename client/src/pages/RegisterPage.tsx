import React, { useState } from "react";
import axios from "axios";
import {API_BASE_URL} from "../ApiConfig.ts";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
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
            if (formData.password !== formData.confirmPassword) {
                throw new Error("Passwords do not match.");
            }

            const response = await axios.post(`${API_BASE_URL}auth/register`, formData);

            setResponseMessage(response.data.message);
        } catch (error) {
            setError(error.message || "An error occurred during registration. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required
                        placeholder="Enter your email"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>


                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {error && <div className="text-red-500">{error}</div>}
                {responseMessage && <div className="text-green-500">{responseMessage}</div>}

                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-4 w-full px-4 py-2 font-bold text-white rounded-md ${loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-700'}`}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
