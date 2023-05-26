import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import NavbarZakat from './NavbarZakat'
import ReactToPrint from "react-to-print"


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
        axios.get("http://localhost:3001/mustahik").then((res) => {
            setMiskin(res.data.filter((e) => e.kategori === 'miskin'))
            setFakir(res.data.filter((e) => e.kategori === 'fakir'))
            setAmil(res.data.filter((e) => e.kategori === 'amil'))
            setMualaf(res.data.filter((e) => e.kategori === 'mualaf'))
            setRiqab(res.data.filter((e) => e.kategori === 'riqab'))
            setGharim(res.data.filter((e) => e.kategori === 'gharim'))
            setSabilillah(res.data.filter((e) => e.kategori === 'fi sabilillah'))
            setIbnu(res.data.filter((e) => e.kategori === 'ibnu sabil'))
        })
    }, [])


    const [miskin, setMiskin] = useState([])
    const [fakir, setFakir] = useState([])
    const [amil, setAmil] = useState([])
    const [mualaf, setMualaf] = useState([])
    const [riqab, setRiqab] = useState([])
    const [gharim, setGharim] = useState([])
    const [sabilillah, setSabilillah] = useState([])
    const [ibnu, setIbnu] = useState([])
    const [totalMuzakki, setTotalMuzakki] = useState();
    const [totalJiwa, setTotalJiwa] = useState(0);
    const [totalUang, setTotalUang] = useState(0);
    const [totalBeras, setTotalBeras] = useState(0)
    const componentRef = useRef()


    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto px-4 '>
            <NavbarZakat />
            <div className='my-8 pl-8' ref={componentRef}>
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
                            <li>u/ {fakir.filter((e) => e.beras !== 0).length} orang fakir : {fakir.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                            <li>u/ {miskin.filter((e) => e.beras !== 0).length} orang miskin : {miskin.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                            <li>u/ {amil.filter((e) => e.beras !== 0).length} orang amil : {amil.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                            <li>u/ {mualaf.filter((e) => e.beras !== 0).length} orang mualaf : {mualaf.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                            <li>u/ {riqab.filter((e) => e.beras !== 0).length} orang riqab : {riqab.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                            <li>u/ {gharim.filter((e) => e.beras !== 0).length} orang gharim : {gharim.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                            <li>u/ {sabilillah.filter((e) => e.beras !== 0).length} orang fi sabilillah : {sabilillah.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                            <li>u/ {ibnu.filter((e) => e.beras !== 0).length} orang ibnu sabil : {ibnu.reduce((a, b) => {
                                return a + b.beras
                            }, 0)} Kg </li>
                        </ul>
                        <li>Uang</li>
                        <ul className='list-decimal ml-8'>
                            <li>u/ {fakir.filter((e) => e.uang !== 0).length} orang fakir : Rp {fakir.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                            <li>u/ {miskin.filter((e) => e.uang !== 0).length} orang miskin : Rp {miskin.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                            <li>u/ {amil.filter((e) => e.uang !== 0).length} orang amil : Rp {amil.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                            <li>u/ {mualaf.filter((e) => e.uang !== 0).length} orang mualaf : Rp {mualaf.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                            <li>u/ {riqab.filter((e) => e.uang !== 0).length} orang riqab : Rp {riqab.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                            <li>u/ {gharim.filter((e) => e.uang !== 0).length} orang gharim : Rp {gharim.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                            <li>u/ {sabilillah.filter((e) => e.uang !== 0).length} orang fi sabilillah : Rp {sabilillah.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                            <li>u/ {ibnu.filter((e) => e.uang !== 0).length} orang ibnu sabil : Rp {ibnu.reduce((a, b) => {
                                return a + b.uang
                            }, 0)} </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='mb-6 flex justify-end px-10'>
                <ReactToPrint
                    trigger={() => {
                        return <button className='bg-[#112D4E] py-2 px-4 text-white rounded-2xl ml-12 hover:shadow-slate-800'>print</button>
                    }}
                    content={() => componentRef.current}
                />
            </div>
        </div>
    )
}

export default Laporan