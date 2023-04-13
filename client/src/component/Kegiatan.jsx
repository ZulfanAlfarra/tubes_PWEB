import React from 'react'
import zakat from '../image/zakat.jpeg'
import { useNavigate } from 'react-router-dom'

const Kegiatan = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full max-w-[1240px] mx-auto '>
      <div className='min-h-screen bg-[#F9F7F7] flex flex-wrap mx-auto justify-center'>
        <div class="max-w-sm m-4 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:shadow-2xl hover:-translate-y-2 " onClick={() => {
          navigate('/kegiatan/zakat')
        }} >
          <img className='w-full' src={zakat} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Zakat Fitrah</div>
            <p class="text-gray-700 text-base">
              Zakat fitrah adalah zakat yang diwajibkan atas setiap jiwa baik lelaki dan perempuan muslim yang dilakukan pada bulan Ramadan hingga menjelang salat Idul Fitri.
            </p>
          </div>
        </div>
        <div class="cursor-not-allowed max-w-sm m-4 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:shadow-2xl hover:-translate-y-2 hover:blur-sm " onClick={() => {
          navigate('#')
        }} >
          <img className='w-full' src={zakat} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Qurban</div>
            <p class="text-gray-700 text-base">
              kurban atau qurban memiliki arti hewan sembelihan. Menurut istilah, kurban artinya menyembelih hewan tertentu pada Hari Raya Idul Adha sebagai bentuk ibadah kepada Allah SWT.
            </p>
          </div>
        </div>
        <div class="max-w-sm m-4 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-not-allowed hover:shadow-2xl hover:-translate-y-2 hover:blur-sm " onClick={() => {
          navigate('#')
        }} >
          <img className='w-full' src={zakat} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Pengajian Mingguan</div>
            <p class="text-gray-700 text-base">
              Pengajian rutin yang dilaksanakan setiap hari Jumat malam setelah solat isya di masjid AL-IHSAN.
            </p>
          </div>
        </div>
        <div class="max-w-sm m-4 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-not-allowed hover:shadow-2xl hover:-translate-y-2 hover:blur-sm " onClick={() => {
          navigate('#')
        }} >
          <img className='w-full' src={zakat} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Keuangan</div>
            <p class="text-gray-700 text-base">
              Zakat fitrah adalah zakat yang diwajibkan atas setiap jiwa baik lelaki dan perempuan muslim yang dilakukan pada bulan Ramadan hingga menjelang salat Idul Fitri.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kegiatan