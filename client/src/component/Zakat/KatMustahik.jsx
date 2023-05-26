import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarZakat from './NavbarZakat'

const KatMustahik = () => {
  useEffect(() => {
    axios.get('http://localhost:3001/katmustahik').then((res) => {
      setDataKat(res.data)
    })
  }, [])

  const [dataKat, setDataKat] = useState([])
  const [edit, setEdit] = useState(false)
  const [jml_hak, setJml_hak] = useState()

  const update = (id) => {
    axios.put('http://localhost:3001/katmustahik/update', {
      id: id,
      jml_hak: jml_hak
    })
    window.location.reload()
  }


  return (
    <div className='min-h-screen bg-[#F9F7F7] w-full max-w-[1240px] mx-auto mt-8'>
      <NavbarZakat />
      <table className='min-w-full mx-auto'>
        <thead className='bg-[#3F72AF]'>
          <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>no</th>
          <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>nama</th>
          <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>hak</th>
          <th scope='col' className={edit ? ' px-6 py-3 text-xs font-bold text-left uppercase' : 'hidden'} >hak</th>
          <th scope='col' className='px-6 py-3 text-xs font-bold text-left uppercase'>edit</th>
        </thead>
        <tbody>
          {dataKat.map((e, index) => {
            return (
              <tr>
                <td className='px-6 py-3'>{index + 1}</td>
                <td className='px-6 py-3'>{e.nama_kat}</td>
                <td className='px-6 py-3' >{e.jml_hak} kg | Rp {e.jml_hak * 30000}</td>
                <td className={edit ? 'px-6 py-3' : 'hidden'}><input type="number" defaultValue={e.jml_hak} className='w-14' onChange={(e) => setJml_hak(e.target.value)} /></td>
                <td className='px-6 py-3'> {!edit ? <button className='rounded-full bg-[red] px-4' onClick={() => setEdit(!edit)}>edit</button> : <button className='rounded-full bg-[red] px-4' onClick={() => update(e.id)}>update</button>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  )
}

export default KatMustahik