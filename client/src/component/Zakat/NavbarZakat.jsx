import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const NavbarZakat = () => {
  const [nav, setNav] = useState(false)
  const navHandle = () => {
    setNav(!nav);
  };
  return (
    <div className=''>
      <ArrowCircleLeftIcon className='fixed right-0 top-[50%] w-[30%] h-[40%] text-[#112D4E] cursor-pointer' fontSize='large' onClick={navHandle} />
      <div
        className={
          nav
            ? "fixed right-0 top-[25%] w-[30%] h-[60%] flex border-r border-r-gray-900 bg-[#DBE2EF] ease-in-out duration-700 rounded"
            : "fixed right-[-100%]"
        }
      >
        <div className='mr-5 mt-[50%]'>
          <ArrowCircleRightIcon className='text-[#112D4E] cursor-pointer' fontSize='large' onClick={navHandle} />
        </div>
        <div className=''>
          <h1 className="w-full text-3xl font-bold m-4 text-[black] uppercase ">
            kegiatan zakat
          </h1>
          <ul className="uppercase p-4 ">
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/kegiatan/zakat/laporan">laporan</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/kegiatan/zakat/muzakki">data muzakki</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/kegiatan/zakat/bayar">pengumpulan zakat</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/kegiatan/zakat/kat">kategori KatMustahik</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/kegiatan/zakat/distribusi">distribusi zakat</Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};


export default NavbarZakat