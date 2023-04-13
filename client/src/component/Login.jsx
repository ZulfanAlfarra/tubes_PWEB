import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../helpers/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else {
                localStorage.setItem("accessToken", response.data)
                setAuthState({
                    username: response.data.username,
                    id: response.data.id,
                    status: true,
                });
                navigate("/")
            }
        });
    };

    return (
        <div className="flex items-center min-h-screen">
            <div className="w-full max-w-md mx-auto">
                <div className="bg-[#F9F7F7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className="uppercase font-bold text-center text-xl my-4">Login</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username:
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password:
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            className="bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#3F72AF]  text-white font-bold py-2 px-4 rounded-full"
                            onClick={login}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
