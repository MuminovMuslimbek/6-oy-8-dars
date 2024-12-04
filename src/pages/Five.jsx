import axios from 'axios'
import React, { useState } from 'react'
import defaultImg from '../assets/default.jpg'
import { ClipLoader } from "react-spinners";

function Five() {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  function handleSearch(event) {
    event.preventDefault();
    if (!movie) {
      alert('Iltimos, kino nomini kiriting!!');
      return;
    }
    setLoading(true)
    axios
      .get(`http://www.omdbapi.com/?s=${movie}&apikey=${import.meta.env.VITE_API_MOVIE}`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.Search);
          setError(false);
        } else {
          setError(true);
          setData([]);
        }
      })
      .catch((err) => {
        setError(true);
        setData([]);
        console.log(err);
      })
      .finally(() => {
        setLoading(false); 
      })
    setMovie('');
  }

  return (
    <div className="max-w-[1100px] w-full mx-auto py-[50px] flex flex-col justify-center items-center gap-[25px]">
      <h1 className="text-[30px]">Beshinchi vazifa</h1>
      <form onSubmit={handleSearch} className="flex max-w-[500px] w-full p-6 bg-blue-500 rounded-md gap-4 items-center">
        <input value={movie} onChange={(e) => setMovie(e.target.value)} className="p-2 rounded-md w-full" type="text" placeholder="Search movie.." />
        <button className="bg-white p-2 rounded-md active:scale-95 transition-[0.3s] w-full max-w-[100px] text-blue-500" type="submit">Search</button>
      </form>
      <div className='flex flex-col justify-center gap-10 items-center'>
        {loading ? <ClipLoader color="blue" size={100} /> : ''}
        {error ? <p className="text-red-500 select-none">Bunday kino topilmadi!</p> : ''}
        {data.length > 0 && (
          <div className="flex flex-wrap gap-[30px] justify-center max-w-[1200px]">
            {data.map((value, index) => (
              <div key={index} className="flex flex-col items-center  bg-gray-100  rounded-md gap-4 max-w-[30%] shadow-xl ">
                <img src={value.Poster && value.Poster !== 'N/A' ? value.Poster : defaultImg} className="max-w-[250px] w-full h-[300px] rounded-md" />
                <div className='flex flex-col max-w-[200px] text-center px-4 pb-4'>
                  <h3 className="text-lg font-bold">{value.Title}</h3>
                  <p>{value.Year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Five;
