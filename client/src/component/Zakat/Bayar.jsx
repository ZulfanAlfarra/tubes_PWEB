import React from 'react'
import { useEffect, useState, useContext, useRef } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReactToPrint from "react-to-print"
import { AuthContext } from "../../helpers/AuthContext";

const Bayar = () => {
  const { authState } = useContext(AuthContext);
  const [listOfMuzakki, setListOfMuzakki] = useState([]);
  const [dataZakat, setDataZakat] = useState([])
  const [datasOfMuzakki, setDatasOfMuzakki] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/muzakki').then((respon) => {
      let datasOfMuzakki = respon.data.map((e) => {
        return {
          value: e.nama,
          label: e.nama
        }
      })
      setDatasOfMuzakki(respon.data)
      setListOfMuzakki(datasOfMuzakki.sort((a, b) => a.label.localeCompare(b.label)))
    })
    axios.get('http://localhost:3001/bayar').then((respon) => {
      setDataZakat(respon.data.sort((a, b) => a.nama_kk.localeCompare(b.nama_kk)))
    })
  }, [])



  const options = [
    { value: 'beras', label: 'beras' },
    { value: 'uang', label: 'uang' },
  ]

  const [nama, setNama] = useState("")
  const [tanggungan, setTanggungan] = useState()
  const [jenis, setJenis] = useState("")
  const [jmlBayar, setJmlBayar] = useState();
  const [beras, setBeras] = useState();
  const [uang, setUang] = useState();

  const submitBayar = () => {
    if (nama !== '' && tanggungan !== null && jenis !== '' && jmlBayar !== null) {
      axios.post("http://localhost:3001/bayar", {
        nama_kk: nama,
        jml_tanggungan: tanggungan,
        jenis_bayar: jenis,
        jmlDibayar: jmlBayar,
        beras: beras,
        uang: uang
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

  const deleteBayar = (id) => {
    let confirm = window.confirm("apakah yakin data dihapus?")
    if (confirm === true) {
      axios.delete(`http://localhost:3001/bayar/${id}`)
      window.location.reload()
    }

  }

  const [selectedValue, setSelectedValue] = useState(null)


  const handleChange = (e) => {
    setSelectedValue(e)
    setTanggungan(parseInt(e.jmlTanggungan))
    setNama(e.nama)
  }

  console.log(datasOfMuzakki)

  const componentRef = useRef()


  return (
    <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto'>
      <p className='uppercase font-bold text-3xl text-center mt-8'>pengumpulan zakat</p>

      <form className={!authState ? 'hidden' : 'w-full max-w-md mx-auto px-8 pt-6 pb-8 shadow-md mt-5'}>
        <p className='font-bold uppercase text-center text-xl mt-0 mb-4 text-[#112D4E]'>Pembayaran Zakat</p>
        <div className='mb-4'>
          <label for="nama" className='block text-gray-700 text-sm font-bold mb-2' >Nama :</label>
          {/* <Select placeholder='Nama Muzakki' options={listOfMuzakki} id='nama' onChange={(e) => setNama(e.value)} /> */}
          <AsyncSelect
            // chacheOptions
            defaultOptions
            value={selectedValue}
            getOptionLabel={e => e.nama}
            getOptionValue={e => e.id}
            options={datasOfMuzakki}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='tanggungan' >Jumlah Tanggungan : </label>
          <input value={tanggungan} id='tanggungan' placeholder='Tanggungan' type='number' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
        <div className='mb-4'>
          <label for="jenisBayar" className='block text-gray-700 text-sm font-bold mb-2' >Jenis Pembayaran :</label>
          <Select placeholder='Jenis Pembayaran' options={options} id='nama' onChange={(e) => setJenis(e.value)} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='jumlahDibayar' >Jumlah Dibayar : </label>
          <input onChange={(e) => {
            setJmlBayar(e.target.value)
            if (jenis === 'uang') {
              setUang(e.target.value)
              setBeras(0)
            } else {
              setBeras(e.target.value)
              setUang(0)
            }
          }} id='jumlahDibayar' placeholder='Jumlah' type='number' step='0.01' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
        <div className='text-right'>
          <button onClick={submitBayar} className='bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#3F72AF] mt-5 text-white font-bold py-2 px-4 rounded-full'>Bayar</button>
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
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>jumlah tanggungan</th>
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>jenis pembayaran</th>
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>jumlah pembayaran</th>
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>beras</th>
            <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>uang</th>
            <th scope='col' className={!authState ? 'hidden' : 'px-6 py-3 text-xs font-bold text-left uppercase'}>aciton</th>
          </thead>
          <tbody>
            {dataZakat.map((e, index) => {
              return (
                <tr>
                  <td className='text-center'>{index + 1}</td>
                  <td className=''>{e.nama_kk}</td>
                  <td className='text-center'>{e.jml_tanggungan}</td>
                  <td className='text-center'>{e.jenis_bayar}</td>
                  <td className='text-center'>{e.jmlDibayar}</td>
                  <td className='text-center'>{e.beras}</td>
                  <td className='text-center'>{e.uang}</td>
                  <td className={!authState ? 'hidden' : 'flex justify-evenly'}><span onClick={() => {
                    deleteBayar(e.id)
                  }}>{<DeleteIcon fontSize='medium' className='text-red-600 cursor-pointer' />}</span>  {<EditIcon fontSize='medium' className='cursor-pointer' />}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Bayar