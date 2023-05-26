import { React, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'

const MuzakkiUpdate = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [muzakki, setMuzakki] = useState({
        id: id,
        nama: '',
        jmlTanggungan: null,
        ket: ''
    })
    const [nama, setNama] = useState('')
    const [tanggungan, setTanggungan] = useState(null)
    const [ket, setKet] = useState('')
    const [idMuzakki, setIdMuzakki] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3001/muzakki/${id}`)
            .then(res => {
                setMuzakki({ ...muzakki, nama: res.data[0].nama, jmlTanggungan: res.data[0].jmlTanggungan, ket: res.data[0].ket })
                setNama(res.data[0].nama)
                setTanggungan(res.data[0].jmlTanggungan)
                setKet(res.data[0].ket)
                setIdMuzakki(res.data[0].id)
            })
            .catch(err => console.log(err))
    }, [])


    const onSubmit = () => {
        axios.put('http://localhost:3001/muzakki/update', {
            id: id,
            nama: nama,
            jmlTanggungan: tanggungan,
            ket: ket
        })
        axios.delete(`http://localhost:3001/bayar/delete/${idMuzakki}`)
        navigate('/kegiatan/zakat/muzakki')
    }


    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto'>
            <form className='w-full max-w-md mx-auto px-8 pt-6 pb-8 shadow-md mt-5'>
                <p className='font-bold uppercase text-center text-xl mt-0 mb-4 text-[#112D4E]'>Update Muzakki</p>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='nama' >Nama : </label>
                    <input defaultValue={muzakki.nama} onChange={(e) => setNama(e.target.value)} id='nama' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='tanggungan' >Jumlah Tanggungan : </label>
                    <input defaultValue={muzakki.jmlTanggungan} onChange={(e) => setTanggungan(e.target.value)} id='tanggungan' type='number' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='ket' >Keterangan : </label>
                    <input defaultValue={muzakki.ket} onChange={(e) => setKet(e.target.value)} id='ket' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='text-right'>
                    <button onClick={onSubmit} className='bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#3F72AF] mt-5 text-white font-bold py-2 px-4 rounded-full'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default MuzakkiUpdate