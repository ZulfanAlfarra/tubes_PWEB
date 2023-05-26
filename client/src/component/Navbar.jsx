import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  const [nav, setNav] = useState(false);
  const { authState, setAuthState } = useContext(AuthContext);

  const navHandle = () => {
    setNav(!nav);
  };

  const logout = () => {
    let confirm = window.confirm('apakah yakin mau logout')
    if (confirm === true) {
      localStorage.removeItem('accessToken')
      setAuthState(false)
      navigate('/')
    }

  }

  return (
    <div>
      <div className="bg-[#112D4E] navbar">
        <div className="flex sticky top-0 justify-between items-center h-16 w-full max-w-[1240px] mx-auto px-4 uppercase text-[#F9F7F7] ">
          <h1 className="w-full text-3xl font-bold text-[#DBE2EF] ">Al-Ihsan</h1>
          <ul className="hidden md:flex ">
            <li className="p-4 hover:text-[#3F72AF]">
              <Link to="/">beranda</Link>
            </li>
            <li className="p-4 hover:text-[#3F72AF]">
              <Link to="/kegiatan">kegiatan</Link>
            </li>
            {!authState ? (
              <li className="p-4 hover:text-[#3F72AF]">
                <Link to="/login">Login</Link>
              </li>
            ) : (<li className="p-4 hover:text-[#3F72AF]" onClick={logout}>
              logout
            </li>)}
          </ul>
          <div onClick={navHandle} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#112D4E] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="w-full text-3xl font-bold m-4 text-[#DBE2EF] ">
              Al-Ihsan
            </h1>
            <ul className="uppercase p-4 ">
              <li className="p-4 border-b border-b-gray-600">
                <Link to="/">beranda</Link>
              </li>
              <li className="p-4 border-b border-b-gray-600">
                <Link to="/kegiatan">kegiatan</Link>
              </li>
              {!authState ? (
                <li className="p-4 ">
                  <Link to="/login">Login</Link>
                </li>
              ) : (<li className="p-4 hover:text-[#3F72AF]" onClick={logout}>
                logout
              </li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-16">
      </div>
    </div>
  );
};

export default Navbar;

// #F9F7F7
// #DBE2EF
// #3F72AF
// #112D4E
