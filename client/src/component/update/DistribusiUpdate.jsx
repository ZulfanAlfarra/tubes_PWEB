import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import Select from 'react-select'

const DistribusiUpdate = () => {
    const { id } = useParams();
    const [dataOfKat, setDataOfKat] = useState([])
    const [nama, setNama] = useState("")
    const [kat, setKat] = useState("")
    const [hak, setHak] = useState(null)
    const [jenis, setJenis] = useState("")
    const [zakBeras, setZakBeras] = useState(0)
    const [zakUang, setZakUang] = useState(0)
    const [totalBeras, setTotalBeras] = useState(0)
    const [totalUang, setTotalUang] = useState(0)
    const [jmlHakberas, setJmlHakberas] = useState(0)
    const [jmlHakUang, setJmlHakUang] = useState(0)

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
        axios.get(`http://localhost:3001/mustahik/${id}`)
            .then(res => {
                setNama(res.data[0].nama)
                setKat(res.data[0].kategori)
                setHak(res.data[0].hak)
                setZakBeras(res.data[0].beras)
                setZakUang(res.data[0].uang)
            })
            .catch(err => console.log(err))
        axios.get("http://localhost:3001/bayar").then((respon) => {
            const dataBeras = respon.data.map((e) => e.beras)
            const dataUang = respon.data.map((e) => e.uang)

            const jmlBeras = dataBeras.reduce((a, b) => a + b)
            const jmlUang = dataUang.reduce((a, b) => a + b)

            setTotalBeras(jmlBeras)
            setTotalUang(jmlUang)
        })
        axios.get('http://localhost:3001/mustahik').then((res) => {
            const hakBeras = res.data.map((e) => e.beras)
            const hakUang = res.data.map((e) => e.uang)

            const jmlHakBeras = hakBeras.reduce((a, b) => a + b)
            const jmlHakUang = hakUang.reduce((a, b) => a + b)

            setJmlHakberas(jmlHakBeras)
            setJmlHakUang(jmlHakUang)

        })
    }, [])

    const options = [
        { value: 'beras', label: 'beras' },
        { value: 'uang', label: 'uang' },
    ]

    const navigate = useNavigate()

    const onSubmit = (e) => {
        if (sisaBerasZakat - zakBeras >= 0 && sisaUangZakat - zakUang >= 0) {
            axios.put('http://localhost:3001/mustahik/update', {
                id: id,
                nama: nama,
                kategori: kat,
                hak: hak,
                beras: zakBeras,
                uang: zakUang
            })
            navigate('/kegiatan/zakat/distribusi')
        } else {
            e.preventDefault()
            alert('stok kurang')
        }

    }

    console.log(totalBeras)
    console.log(jmlHakberas)

    const sisaBerasZakat = totalBeras + zakBeras - jmlHakberas
    const sisaUangZakat = totalUang + zakUang - jmlHakUang



    return (
        <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto'>
            <form className='w-full max-w-md mx-auto px-8 pt-6 pb-8 shadow-md mt-5'>
                <p className='font-bold uppercase text-center text-xl mt-0 mb-4 text-[#112D4E]'>Distribusi Zakat</p>
                <p className='text-md font-semibold capitalize'>sisa beras = {sisaBerasZakat} kg</p>
                <p className='text-md font-semibold capitalize'>sisa uang = rp {sisaUangZakat}</p>
                <div className='mb-4 mt-8'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='nama' >Nama : </label>
                    <input defaultValue={nama} onChange={(e) => setNama(e.target.value)} id='nama' placeholder='Nama' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='kat' >Kategori : </label>
                    <Select onChange={(e) => setKat(e.value)} placeholder={kat} options={dataOfKat} id='kat' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='kat' >jenis </label>
                    <Select onChange={(e) => setJenis(e.value)} placeholder='Beras/Uang' options={options} id='kat' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' for='hak' >Hak : </label>
                    <input defaultValue={hak} onChange={(e) => {
                        setHak(e.target.value)
                        if (jenis === 'beras') {
                            setZakBeras(e.target.value)
                        } else if (jenis === 'uang') {
                            setZakUang(e.target.value)
                        }
                    }} id='hak' placeholder='Hak' type='number' step='0.01' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='text-right'>
                    <button onClick={onSubmit} className='bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#3F72AF] mt-5 text-white font-bold py-2 px-4 rounded-full'>Simpan</button>
                </div>
            </form>
        </div>
    )
}

export default DistribusiUpdate;