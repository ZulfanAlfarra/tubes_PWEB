import React from 'react'
import { useEffect, useState, useContext, useRef } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReactToPrint from "react-to-print"
import { AuthContext } from "../../helpers/AuthContext";

const Mustahik = () => {
    const { authState } = useContext(AuthContext);
    const [dataOfKat, setDataOfKat] = useState([])
    const [dataOfMustahik, setDataOfMustahik] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/katmustahik').then((res) => {
            let dataKat = res.data.map((e) => {
                return {
                    value: e.nama_kat,
                    label: e.nama_kat
                }
            })
            setDataOfKat(dataKat)
        })
        axios.get('http://localhost:3001/mustahik').then((res) => {
            setDataOfMustahik(res.data)
        })
    }, [])

    const [nama, setNama] = useState("")
    const [kat, setKat] = useState("")
    const [hak, setHak] = useState()
    const componentRef = useRef()

    const submit = () => {
        if (nama !== '' && kat !== '' && hak !== null) {
            axios.post('http://localhost:3001/mustahik', {
                nama: nama,
                kategori: kat,
                hak: hak
            }, {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            }).then(() => {
                alert('hanya admin yang bisa')
            })
        } else {
            alert('data ada yang kosong')
        }
    }

    console.log(dataOfMustahik)

    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto'>
            <form className={!authState ? 'hidden' : 'w-full max-w-md mx-auto px-8 pt-6 pb-8 shadow-md mt-5'}>
                <p className='font-bold uppercase text-center text-xl mt-0 mb-4 text-[#112D4E]'>Pendataan Mustahik</p>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='nama' >Nama : </label>
                    <input onChange={(e) => setNama(e.target.value)} id='nama' placeholder='Nama' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='kat' >Kategori : </label>
                    <Select onChange={(e) => setKat(e.value)} placeholder='Kategori' options={dataOfKat} id='kat' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='hak' >Hak : </label>
                    <input onChange={(e) => setHak(e.target.value)} id='hak' placeholder='Hak' type='number' step='0.01' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='text-right'>
                    <button onClick={submit} className='bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#3F72AF] mt-5 text-white font-bold py-2 px-4 rounded-full'>Simpan</button>
                </div>
            </form>

            <div className='mt-16'>
                <ReactToPrint
                    trigger={() => {
                        return <button className='bg-[]'>print</button>
                    }}
                    content={() => componentRef.current}
                />
            </div>
            <div ref={componentRef} className='w-full overflow-hidden border rounded-lg shadow-md mb-16'>
                <table className='min-w-full mx-auto'>
                    <thead className='bg-[#3F72AF]'>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>no</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>nama</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>kategori</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>hak</th>
                        <th scope='col' className={!authState ? 'hidden' : 'px-6 py-3 text-xs font-bold text-center uppercase'}>aciton</th>
                    </thead>
                    <tbody>
                        {dataOfMustahik.map((e, index) => {
                            return (
                                <tr>
                                    <td className='px-6'>{index + 1}</td>
                                    <td className='px-6'>{e.nama}</td>
                                    <td className='px-6'>{e.kategori}</td>
                                    <td className='px-6'>{e.hak}</td>
                                    <td className={!authState ? 'hidden' : 'flex justify-evenly'}><span>{<DeleteIcon fontSize='medium' className='text-red-600 cursor-pointer' />}</span>  {<EditIcon fontSize='medium' className='cursor-pointer' />}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Mustahik