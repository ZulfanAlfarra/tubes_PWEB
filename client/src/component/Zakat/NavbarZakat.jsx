import React from 'react'
import { Link } from 'react-router-dom';

const NavbarZakat = () => {
  return (
    <div className='bg-[#3F72AF] flex justify-between '>
      <div className="flex justify-between items-center h-8 max-w-[1240px] mx-auto px-4 uppercase text-[#EEEEEE] ">
        <ul className="flex ">
          <li className="p-4"><Link>Laporan</Link></li>
          <li className="p-4">Data Mustahik</li>
          <li className="p-4"><Link to="/kegiatan/zakat/bayar">Bayar</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarZakat