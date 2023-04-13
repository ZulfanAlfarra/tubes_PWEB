import React from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Muzakki = () => {
    const [dataMuzakki, setDataMuzakki] = useState([])
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
        axios.delete(`http://localhost:3001/muzakki/${id}`)
        window.location.reload()
    }

    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto'>
            <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}  >
                <Form className='w-full max-w-md mx-auto px-8 pt-6 pb-8 shadow-md mt-5'>
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

            <div className='w-full overflow-hidden border rounded-lg shadow-md my-24'>
                <table className='min-w-full mx-auto'>
                    <thead className='bg-[#3F72AF]'>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>no</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>nama</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>jumlah tanggungan</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>keterangan</th>
                        <th scope='col' className='px-6 py-3 text-xs font-bold text-center uppercase'>aciton</th>
                    </thead>
                    <tbody>
                        {dataMuzakki.map((e, index) => {
                            return <tr>
                                <td className='text-center'>{index + 1}</td>
                                <td className='text-center'>{e.nama}</td>
                                <td className='text-center'>{e.jmlTanggungan}</td>
                                <td className='text-center'>{e.ket}</td>
                                <td className='flex justify-evenly'><span onClick={() => {
                                    deleteBayar(e.id)
                                }}>{<DeleteIcon fontSize='medium' className='text-red-600 cursor-pointer' />}</span>  {<EditIcon fontSize='medium' className='cursor-pointer' />}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Muzakki