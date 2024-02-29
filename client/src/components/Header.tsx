import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.tsx";

const Header = () => {
    let navigate = useNavigate();

    return (
        <nav className="flex justify-between items-center border-b-2 border-gray-100 py-3 px-5 bg-white shadow-md">
            <div className="cursor-pointer" onClick={() => navigate('/home')}>
                <Logo color="#243c5a" />
            </div>
            <div className="flex space-x-4">
                <div className="text-gray-800 hover:text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login</div>
                <div className="text-gray-800 hover:text-blue-500 cursor-pointer" onClick={() => navigate('/register')}>Sign up</div>
                <div className="text-gray-800 hover:text-blue-500 cursor-pointer" onClick={() => navigate('/encrypt')}>Logout</div>
            </div>
        </nav>
    );
}

export default Header;
