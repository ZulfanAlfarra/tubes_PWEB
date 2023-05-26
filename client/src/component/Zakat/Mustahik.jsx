import React from 'react'
import { useEffect, useState, useContext, useRef } from 'react'
import Select from 'react-select'
import NavbarZakat from './NavbarZakat'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReactToPrint from "react-to-print"
import { AuthContext } from "../../helpers/AuthContext";
import { useNavigate } from 'react-router'

const Mustahik = () => {
    const { authState } = useContext(AuthContext);
    const [dataOfKat, setDataOfKat] = useState([])
    const [dataOfMustahik, setDataOfMustahik] = useState([])
    const [beras, setBeras] = useState(0)
    const [uang, setUang] = useState(0)
    const [jmlHakberas, setJmlHakberas] = useState(0)
    const [jmlHakUang, setJmlHakUang] = useState(0)
    const [hakMiskin, setHakMiskin] = useState(0)
    const [hakFakir, setHakFakir] = useState(0)
    const [hakAmil, setHakAmil] = useState(0)
    const [hakMualaf, setHakMualaf] = useState(0)
    const [hakRiqab, setHakRiqab] = useState(0)
    const [hakGharim, setHakGharim] = useState(0)
    const [hakSabilillah, setHakSabilillah] = useState(0)
    const [hakIbnu, setHakIbnu] = useState(0)



    useEffect(() => {
        axios.get('http://localhost:3001/katmustahik').then((res) => {
            let dataKat = res.data.map((e) => {
                return {
                    value: e.nama_kat,
                    label: e.nama_kat
                }
            })
            setDataOfKat(dataKat)
            setHakFakir(res.data[0].jml_hak)
            setHakMiskin(res.data[1].jml_hak)
            setHakAmil(res.data[2].jml_hak)
            setHakMualaf(res.data[3].jml_hak)
            setHakRiqab(res.data[4].jml_hak)
            setHakGharim(res.data[5].jml_hak)
            setHakSabilillah(res.data[6].jml_hak)
            setHakIbnu(res.data[7].jml_hak)
        })
        axios.get('http://localhost:3001/mustahik').then((res) => {
            setDataOfMustahik(res.data)
            const hakBeras = res.data.map((e) => e.beras)
            const hakUang = res.data.map((e) => e.uang)

            const jmlHakBeras = hakBeras.reduce((a, b) => a + b)
            const jmlHakUang = hakUang.reduce((a, b) => a + b)

            setJmlHakberas(jmlHakBeras)
            setJmlHakUang(jmlHakUang)

        })
        axios.get("http://localhost:3001/bayar").then((respon) => {
            const dataBeras = respon.data.map((e) => e.beras)
            const dataUang = respon.data.map((e) => e.uang)

            const jmlBeras = dataBeras.reduce((a, b) => a + b)
            const jmlUang = dataUang.reduce((a, b) => a + b)

            setBeras(jmlBeras)
            setUang(jmlUang)
        })
    }, [])

    const options = [
        { value: 'beras', label: 'beras' },
        { value: 'uang', label: 'uang' },
    ]


    const [nama, setNama] = useState("")
    const [kat, setKat] = useState("")
    const [hak, setHak] = useState(null)
    const [jenis, setJenis] = useState("")
    const [zakBeras, setZakBeras] = useState(0)
    const [zakUang, setZakUang] = useState(0)
    const [hakEnd, setHakEnd] = useState(null)
    const componentRef = useRef()

    const submit = (e) => {
        if (nama !== '' && kat !== '' && hak !== null && berasZakat - zakBeras >= 0 && uangZakat - zakUang >= 0) {
            axios.post('http://localhost:3001/mustahik', {
                nama: nama,
                kategori: kat,
                hak: hak,
                beras: zakBeras,
                uang: zakUang
            }, {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            }).then(() => {
                alert('hanya admin yang bisa')
            })
        } else if (berasZakat - zakBeras < 0 || uangZakat - zakUang < 0) {
            e.preventDefault()
            alert('stok kurang')
        }
        else {
            e.preventDefault()
            alert('data ada yang kosong')
        }
    }

    const deleteMustahik = (id) => {
        let confirm = window.confirm("apakah yakin data dihapus?")
        if (confirm === true) {
            axios.delete(`http://localhost:3001/mustahik/${id}`)
            window.location.reload()
        }
    }

    let berasZakat = beras - jmlHakberas
    let uangZakat = uang - jmlHakUang

    const navigate = useNavigate()
    const update = (id) => {
        navigate(`/kegiatan/zakat/distribusi/update/${id}`)
    }






    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto'>
            <NavbarZakat />
            <form className={!authState ? 'hidden' : 'w-full max-w-md mx-auto px-8 pt-6 pb-8 shadow-md mt-5'}>
                <p className='font-bold uppercase text-center text-xl mt-0 mb-4 text-[#112D4E]'>Distribusi Zakat</p>
                <p className='text-md font-semibold capitalize'>sisa beras = {berasZakat} kg</p>
                <p className='text-md font-semibold capitalize'>sisa uang = rp {uangZakat}</p>
                <div className='mb-4 mt-8'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='nama' >Nama : </label>
                    <input onChange={(e) => setNama(e.target.value)} id='nama' placeholder='Nama' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='kat' >Kategori : </label>
                    <Select onChange={(e) => {
                        setKat(e.value)
                        if (e.value === 'fakir') return setHak(hakFakir) + setHakEnd(hakFakir)
                        if (e.value === 'miskin') return setHak(hakMiskin)
                        if (e.value === 'amil') return setHak(hakAmil)
                        if (e.value === 'mualaf') return setHak(hakMualaf)
                        if (e.value === 'riqab') return setHak(hakRiqab)
                        if (e.value === 'gharim') return setHak(hakGharim)
                        if (e.value === 'fi sabilillah') return setHak(hakSabilillah)
                        if (e.value === 'ibnu sabil') return setHak(hakIbnu)
                    }
                    } placeholder='Kategori' options={dataOfKat} id='kat' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='kat' >jenis </label>
                    <Select onChange={(e) => {
                        setJenis(e.value)
                        if (e.value === 'beras') {
                            setZakBeras(hak)
                            setHakEnd(hak)
                        } else if (e.value === 'uang') {
                            setZakUang(hak * 30000)
                            setHakEnd(hak * 30000)
                        }

                    }} placeholder='Beras/Uang' options={options} id='kat' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='hak' >Hak : </label>
                    <input value={hakEnd}
                        onChange={(e) => {
                            setHak(e.value)
                        }} id='hak' placeholder='Hak' type='number' step='0.01' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='text-right'>
                    <button onClick={submit} className='bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#3F72AF] mt-5 text-white font-bold py-2 px-4 rounded-full'>Simpan</button>
                </div>
            </form>

            <div className='mt-16'>
                <ReactToPrint
                    trigger={() => {
                        return <button className='bg-[#112D4E] py-2 px-4 text-white rounded-2xl ml-12 hover:shadow-slate-800'>print</button>
                    }}
                    content={() => componentRef.current}
                />
            </div>
            <div ref={componentRef} className='w-full overflow-hidden border rounded-lg shadow-md mb-16'>
                <p className='text-xl uppercase font-bold text-center py-3'>Data penerima Zakat</p>
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
                                    <td className='px-6'>{e.hak} </td>
                                    <td className={!authState ? 'hidden' : 'flex justify-evenly'}><span onClick={() => deleteMustahik(e.id)}>{<DeleteIcon fontSize='medium' className='text-red-600 cursor-pointer' />}</span> <span onClick={() => update(e.id)}>{<EditIcon fontSize='medium' className='cursor-pointer' />}</span> </td>
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