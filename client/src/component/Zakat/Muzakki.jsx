import React from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useEffect, useState, useContext, useRef } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AuthContext } from "../../helpers/AuthContext";
import NavbarZakat from './NavbarZakat'
import ReactToPrint from "react-to-print"
import { useNavigate } from 'react-router'


const Muzakki = () => {
    const { authState } = useContext(AuthContext);
    const [dataMuzakki, setDataMuzakki] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3001/muzakki').then((respon) => {
            setDataMuzakki(respon.data.sort((a, b) => a.nama.localeCompare(b.nama)))
        })
    }, [])

    const initialValue = {
        nama: "",
        jmlTanggungan: NaN,
        ket: ""
    }

    const validationSchema = Yup.object().shape({
        nama: Yup.string().required('*wajib disi'),
        jmlTanggungan: Yup.number().required(''),
        ket: Yup.string()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/muzakki", data).then(() => {
            alert("wkwk")
        })
        window.location.reload()
    }

    const deleteBayar = (id) => {
        let confirm = window.confirm("apakah yakin data dihapus?")
        if (confirm === true) {
            axios.delete(`http://localhost:3001/muzakki/${id}`)
            window.location.reload()
        }
    }

    const update = (id) => {
        navigate(`/kegiatan/zakat/muzakki/update/${id}`)
    }

    const componentRef = useRef()

    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto'>
            <NavbarZakat />
            <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}  >
                <Form className={!authState ? 'hidden' : 'w-full max-w-md mx-auto px-8 pt-6 pb-8 shadow-md mt-5'}>
                    <p className='font-bold uppercase text-center text-xl mt-0 mb-4 text-[#112D4E]'>Pendataan Muzakki</p>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' for='nama' >Nama : </label>
                        <ErrorMessage name='nama' component='span' className='text-[red]' />
                        <Field autocomplete='off' id='nama' name='nama' placeholder='Nama' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    <div className='mb-4'>
                        <label for="tanggungan" className='block text-gray-700 text-sm font-bold mb-2' >Jumlah Tanggungan :</label>
                        <ErrorMessage name='jmlTanggungan' component='span' className='text-[red]' />
                        <Field autocomplete='off' id='tanggungan' name='jmlTanggungan' placeholder='Jumlah Tanggungan' type='number' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' for='keterangan' >Keterangan : </label>
                        <Field autocomplete='off' id='keterangan' name='ket' placeholder='Keterangan' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    <div className='text-right'>
                        <button type='submit' className='bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#3F72AF] mt-5 text-white font-bold py-2 px-4 rounded-full'>Simpan</button>
                    </div>
                </Form>
            </Formik>

            <div className='mt-10'>
                <ReactToPrint
                    trigger={() => {
                        return <button className='bg-[#112D4E] py-2 px-4 text-white rounded-2xl ml-12 hover:shadow-slate-800'>print</button>
                    }}
                    content={() => componentRef.current}
                />
            </div>

            <div className='w-full overflow-hidden rounded-lg mb-16' ref={componentRef}>
                <p className='uppercase font-bold text-2xl text-center my-5'>data muzakki</p>
                <table className='min-w-full mx-auto table-auto'>
                    <thead className='bg-[#3F72AF]'>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>no</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>nama</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>jumlah tanggungan</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>keterangan</th>
                        <th scope='col' className={!authState ? 'hidden' : 'px-6 py-3 text-xs font-bold text-center uppercase'}>aciton</th>
                    </thead>
                    <tbody>
                        {dataMuzakki.map((e, index) => {
                            return <tr>
                                <td className='text-center py-1'>{index + 1}</td>
                                <td className='text-center py-1'>{e.nama}</td>
                                <td className='text-center py-1'>{e.jmlTanggungan}</td>
                                <td className='text-center py-1'>{e.ket}</td>
                                <td className={!authState ? 'hidden' : 'flex justify-evenly py-1'}>
                                    <span onClick={() => deleteBayar(e.id)}>{<DeleteIcon fontSize='medium' className='text-red-600 cursor-pointer' />}</span>
                                    <span onClick={() => update(e.id)}>{<EditIcon fontSize='medium' className='cursor-pointer' />}</span></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Muzakki