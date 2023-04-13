import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Laporan = () => {
    useEffect(() => {
        axios.get("http://localhost:3001/bayar").then((respon) => {
            const dataJiwa = respon.data.map((e) => e.jml_tanggungan)
            const dataBeras = respon.data.map((e) => e.beras)
            const dataUang = respon.data.map((e) => e.uang)
            const dataMuzakki = respon.data.map((e) => e.nama)

            const jiwa = dataJiwa.reduce((a, b) => a + b)
            const beras = dataBeras.reduce((a, b) => a + b)
            const uang = dataUang.reduce((a, b) => a + b)

            setTotalMuzakki(dataMuzakki.length)
            setTotalJiwa(jiwa)
            setTotalBeras(beras)
            setTotalUang(uang)
        })
    }, [])

    const [totalMuzakki, setTotalMuzakki] = useState();
    const [totalJiwa, setTotalJiwa] = useState(0);
    const [totalUang, setTotalUang] = useState(0);
    const [totalBeras, setTotalBeras] = useState(0)

    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto px-4 '>
            <div className='my-8'>
                <p className='font-bold text-3xl uppercase text-center max-w-[50%] mx-auto '>Laporan hasil pemasukan dan pengeluaran</p>
                <div className='my-7'>
                    <p className='uppercase font-bold'>pemasukan</p>
                    <ul className='list-decimal ml-8 mt-2 font-semibold'>
                        <li className=''>Total Muzakki <span className='font-bold ml-4'>: {totalMuzakki}</span></li>
                        <li className=''>Total Jiwa <span className='font-bold ml-12'>: {totalJiwa}</span></li>
                        <li className=''>Total Beras<span className='font-bold ml-11'>: {totalBeras} Kg</span> </li>
                        <li className=''>Total Uang <span className='font-bold ml-10'>: RP {totalUang}</span></li>
                    </ul>
                </div>
                <div className='my-7'>
                    <p className='uppercase font-bold'>pengeluaran</p>
                    <ul className='list-[upper-alpha] ml-8 mt-2 font-semibold'>
                        <li>Beras</li>
                        <ul className='list-decimal ml-8'>
                            <li>adf</li>
                        </ul>
                        <li>Uang</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Laporan