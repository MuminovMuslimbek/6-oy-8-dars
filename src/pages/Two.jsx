import React, { useState } from 'react'

function Two() {
  const [name, setName] = useState('')
  const [developer, setDeveloper] = useState('')
  const [data, setData] = useState([])

  function validate() {
    if (!name) {
      alert('Iltimos kitobni nomini kiriting!!')
      return false
    }
    if (!developer) {
      alert('Iltimos kitobning muallifini kiriting!!')
      return false
    }
    return true
  }

  function handleAdd(event) {
    event.preventDefault()
    let isValid = validate()
    if (!isValid) {
      return
    }
    const newData = {
      id: Date.now(),
      name,
      developer,
      isRead: false,
    }
    setData([...data, newData])

    setName('')
    setDeveloper('')
  }

  function handleChange(cardId) {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === cardId
          ? { ...item, isRead: !item.isRead }
          : item
      )
    )
  }

  function handleDelete(index) {
    let isDelete = confirm('Rostdan ham o\'chirmoqchimisiz??');
    if (isDelete) {
      const filteredData = data.filter((one, two) => two !== index);
      setData(filteredData);
    }
  }

  return (
    <div className='max-w-[1100px] w-full mx-auto py-[50px] flex flex-col justify-center items-center gap-[25px]'>
      <h1 className='text-[30px]'>Ikkinchi vazifa</h1>
      <form onSubmit={handleAdd} className='flex flex-col max-w-[500px] w-full p-6 bg-blue-500 rounded-md gap-4'>
        <input value={name} onChange={(e) => { setName(e.target.value) }} className='p-2 rounded-md' type="text" placeholder='Kitob nomini kiriting..' />
        <input value={developer} onChange={(e) => { setDeveloper(e.target.value) }} className='p-2 rounded-md' type="text" placeholder='Muallif ismi kiriting..' />
        <button className='bg-white p-2 rounded-md active:scale-95 transition-[03s]' type='submit'>Add User</button>
      </form>
      <h2 className='uppercase text-[25px]'>books:</h2>
      <div className='flex flex-wrap gap-[30px] justify-center w-full'>
        {
          data.map((value, index) => (
            <div key={index} className='bg-blue-500 p-6 relative text-white rounded-md max-w-[30%] w-full flex flex-col gap-[10px] items-center'>
              <h3><strong>Name:</strong> {value.name}</h3>
              <p><strong>Developer:</strong> {value.developer}</p>
              <button onClick={() => handleDelete(index)} className='absolute h-0 top-1 right-0 rotate-[45deg] text-[30px]'>+</button>
              <button onClick={() => handleChange(value.id)} className={` ${value.isRead ? 'bg-green-500' : 'bg-red-500'} text-white w-full p-1 mt-4 active:scale-95 transition-[0.3s] rounded-md`}>{value.isRead ? "O'qilgan" : "O'qilmagan"}</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Two
