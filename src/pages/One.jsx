import axios from 'axios'
import React, { useEffect, useState } from 'react'

function One() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.status == 200) {
          setData(response.data)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function validate() {
    if (!name) {
      alert('Iltimos ismni kiriting!!')
      return false
    }
    if (!email) {
      alert('Iltimos email kiriting!!')
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
      name,
      email
    }
    setData([...data, newData])

    setName('')
    setEmail('')
  }

  return (
    <div className='max-w-[1100px] w-full mx-auto py-[50px] flex flex-col justify-center items-center gap-[25px]'>
      <h1 className='text-[30px]'>Birinchi vazifa</h1>
      <form onSubmit={handleAdd} className='flex flex-col max-w-[500px] w-full p-6 bg-blue-500 rounded-md gap-4'>
        <input value={name} onChange={(e) => { setName(e.target.value) }} className='p-2 rounded-md' type="text" placeholder='Enter your name..' />
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='p-2 rounded-md' type="email" placeholder='Enter your email..' />
        <button className='bg-white p-2 rounded-md active:scale-95 transition-[03s]' type='submit'>Add User</button>
      </form>
      <h2 className='uppercase text-[25px]'>users:</h2>
      <div className='flex flex-wrap gap-[30px] justify-center w-full'>
        {
          data.map((value, index) => (
            <div key={index} className='bg-blue-500 p-6 text-white rounded-md max-w-[30%] w-full'>
              <h3><strong>Name:</strong> {value.name}</h3>
              <p><strong>Email:</strong> {value.email}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default One
