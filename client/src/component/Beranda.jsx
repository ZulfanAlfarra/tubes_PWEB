import React from 'react'
import pengajian from '../image/pengajian.jpg'
import sembelih from '../image/sembelih.jpg'
import berjamaah from '../image/berjamah.jpg'

const Beranda = () => {
  return (
    <div className=' bg-[#F9F7F7] '>
      {/* <div className='mx-auto min-h-screen max-w-[1240px] px-4 grid grid-cols-2 content-center gap-4 text-[#F9F7F7]'>
        <div className=''>
          <p className='text-5xl capitalize text-white'>welcome to our site</p>
          <p className='my-8 pl-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita labore, delectus aspernatur omnis corporis consequuntur hic nobis! Laborum fugiat quos libero quisquam molestias dolorem, consequatur error magnam eligendi! Magnam, amet!</p>
          <div className='text-center '>
            <a className=' hover:text-[#3F72AF] px-3' href='mailto: zulfansyahidanalfarra.91@gmail.com' target='_blank'> <EmailIcon fontSize='large' /> </a>
            <a className=' hover:text-[#3F72AF] px-3' href='mailto: zulfansyahidanalfarra.91@gmail.com' target='_blank'> <EmailIcon fontSize='large' /> </a>
            <a className=' hover:text-[#3F72AF] px-3' href='mailto: zulfansyahidanalfarra.91@gmail.com' target='_blank'> <EmailIcon fontSize='large' /> </a>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={masjid} alt="" className='' />
        </div>
      </div> */}
      <div className='hero min-h-screen'>
        <div className='content w-full max-w-[1240px] mx-auto text-center'>
          <p className='text-6xl capitalize font-bold italic'>masjid al-ihsan</p>
          <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem suscipit numquam quasi asperiores consequuntur harum, accusantium unde eos, ullam eveniet, veritatis maiores aperiam. Fuga dolores, quam reprehenderit deleniti impedit hic?</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto my-7'>
        <p className='text-2xl font-semibold text-center'>Tentang Kami</p>
        <p className='text-center py-6'>Sebuah masjid kecil yang berada di daerah Sukarame Kabupaten Tasikmalaya dengan segala kegiatan didalamnya</p>
        <div className='flex flex-wrap mx-auto justify-center'>
          <div className='max-w-sm m-4 rounded overflow-hidden shadow-lg w-full'>
            <img className='w-full' src={pengajian} alt="gambar pengajdian" />
            <p className='text-center py-4 capitalize'>pengajian</p>
          </div>
          <div className='max-w-sm m-4 rounded overflow-hidden shadow-lg w-full'>
            <img className='w-full' src={sembelih} alt="gambar pengajdian" />
            <p className='text-center py-4 capitalize'>penyembelihan</p>
          </div>
          <div className='max-w-sm m-4 rounded overflow-hidden shadow-lg w-full'>
            <img className='w-full' src={berjamaah} alt="gambar pengajdian" />
            <p className='text-center py-4 capitalize'>solat berjamaah</p>
          </div>
          <div className='max-w-sm m-4 rounded overflow-hidden shadow-lg w-full'>
            <img className='w-full' src={berjamaah} alt="gambar pengajdian" />
            <p className='text-center py-4 capitalize'>pengajian</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Beranda