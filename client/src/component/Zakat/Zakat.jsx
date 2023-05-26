import React from 'react'
import { useNavigate } from 'react-router-dom'


const Zakat = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto '>
      <h1 className='text-3xl text-center py-6 font-bold text-[#112D4E]'>Zakat fitrah DKM AL-IHSAN</h1>
      <div className='mx-auto flex flex-col items-center flex-wrap '>
        <div class="max-w-sm rounded-full overflow-hidden shadow-lg bg-[#3F72AF] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:shadow-2xl hover:-translate-y-2 m-4" >
          <div class="px-6 py-4 text-center" onClick={() => {
            navigate('/kegiatan/zakat/laporan')
          }}>
            <div class="font-bold text-xl mb-2">Laporan</div>
          </div>
        </div>
        <div class="max-w-sm rounded-full overflow-hidden shadow-lg bg-[#3F72AF] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:shadow-2xl hover:-translate-y-2 m-4">
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2" onClick={() => {
              navigate('/kegiatan/zakat/muzakki')
            }}>Data Muzakki</div>
          </div>
        </div>
        <div class="max-w-sm rounded-full overflow-hidden shadow-lg bg-[#3F72AF] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:shadow-2xl hover:-translate-y-2 m-4">
          <div class="px-6 py-4 text-center" onClick={() => {
            navigate('/kegiatan/zakat/bayar')
          }} >
            <div class="font-bold text-xl mb-2">Pengumpulan Zakat</div>
          </div>
        </div>
        <div class="max-w-sm rounded-full overflow-hidden shadow-lg bg-[#3F72AF] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:shadow-2xl hover:-translate-y-2 m-4">
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2" onClick={() => {
              navigate('/kegiatan/zakat/kat')
            }}>Kategori Mustahik</div>
          </div>
        </div>
        <div class="max-w-sm rounded-full overflow-hidden shadow-lg bg-[#3F72AF] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:shadow-2xl hover:-translate-y-2 m-4">
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2" onClick={() => {
              navigate('/kegiatan/zakat/distribusi')
            }}>Distribusi zakat</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zakat