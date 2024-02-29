import React, {useEffect, useState} from 'react';
import {API_BASE_URL} from "../ApiConfig.ts";
import axios from 'axios';

type User = {
    id?: number;
    username?: string;
    public_key?: string;
    create_date?: string;
};
const HomePage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
    const [message, setMessage] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('')

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}users`);
                setUsers(response.data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleCheckboxChange = (userId: number, isChecked: boolean) => {
        if (isChecked) {
            setSelectedUserIds((prevSelectedUserIds) => [...prevSelectedUserIds, userId]);
        } else {
            setSelectedUserIds((prevSelectedUserIds) => prevSelectedUserIds.filter(id => id !== userId));
        }
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendClick = async () => {
        const payload = {
            user_ids: selectedUserIds,
            message: message,
        };

        try {
            const response = await axios.post(`${API_BASE_URL}encryption`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setEncryptedMessage(response.data.encryptedMessage)


        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(encryptedMessage).then(() => {
            alert('Encrypted message copied to clipboard!');
        }, (err) => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-lg font-semibold mb-4">Choose users:</h2>
            <ul className="mb-4">
                {users.map((user) => (
                    <li key={user.id} className="flex items-center justify-between mb-2">
                        {user.username}
                        <input
                            type="checkbox"
                            checked={selectedUserIds.includes(user.id!)}
                            onChange={(e) => handleCheckboxChange(user.id!, e.target.checked)}
                            className="ml-2"
                        />
                    </li>
                ))}
            </ul>
            <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your message here"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button onClick={handleSendClick} className="blue-button">
                Encrypt
            </button>
            {encryptedMessage && (
                <>
                    <p className="mb-2">Encrypted Message:</p>
                    <div className="bg-gray-100 p-3 rounded mb-4">{encryptedMessage}</div>
                    <button onClick={copyToClipboard} className="submit-button">
                        Copy to Clipboard
                    </button>
                </>
            )}
        </div>
    );
};

export default HomePage;
 