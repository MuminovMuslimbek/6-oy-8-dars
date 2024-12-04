import { useEffect, useState } from 'react'
import data from '../assets/data.json'

function Four() {
  const [json, setJson] = useState([])
  const [valueByFilter, setValueByFilter] = useState('')
  const [notFound, setNotFound] = useState(false)

  useEffect(function () {
    setJson(data)
  }, [])

  function handleFilter(event) {
    const inputValue = event.target.value.toLowerCase();
    setValueByFilter(inputValue);

    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(inputValue)
    );

    if (filteredData.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setJson(filteredData);
  }


  return (
    <div className='max-w-[1100px] w-full mx-auto py-[50px] flex flex-col justify-center items-center gap-[25px]'>
      <h1 className='text-[30px]'>To'rtinchi vazifa</h1>
      <form className='max-w-[400px] w-full'>
        <input onChange={handleFilter} className='p-2 rounded-md w-full border-2' type="text" placeholder='Filter by title..' />
      </form>
      <h2 className='text-[25px]'>Posts:</h2>
      <div className='flex flex-wrap gap-7'>
        {
          notFound ? <p className='text-red-500'>Siz qidirib turgan kardni title bu yerda mavjud emas!!</p> : ''
        }
        {
          json && json.map((value, index) => (
            <div key={index} className=' text-white flex flex-col max-w-[30%] w-full bg-blue-500 p-7 rounded-lg justify-between'>
              <span>{value.id}</span>
              <h3><strong>Title:</strong> {value.title}</h3>
              <p><strong>Body:</strong> {value.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Four
