import React, { useState } from 'react';
import axios from 'axios';

function Three() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  function handleAdd(event) {
    event.preventDefault();
    if (!city) {
      alert('Shahar nomini kiriting!');
      return;
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_WEATHER}&units=metric`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
    setCity('')
  }

  return (
    <div className="max-w-[1100px] w-full mx-auto py-[50px] flex flex-col justify-center items-center gap-[25px]">
      <h1 className="text-[30px]">Uchinchi vazifa</h1>
      <form onSubmit={handleAdd} className="flex max-w-[500px] w-full p-6 bg-blue-500 rounded-md gap-4 items-center">
        <input value={city} onChange={(e) => setCity(e.target.value)} className="p-2 rounded-md w-full" type="text" placeholder="Enter your city.." />
        <button className="bg-white p-2 rounded-md active:scale-95 transition-[0.3s] w-full max-w-[100px] text-blue-500" type="submit">Search</button>
      </form>
      <div>
        {error ? <p className="text-red-500 select-none">Bunday shahar topilmadi! </p> : ''}
         {data && (
          <ul className="mt-4 bg-gray-100 p-4 rounded-md shadow-md">
            <li><strong>Harorat:</strong> {data.main.temp}°C</li>
            <li><strong>Namlik:</strong> {data.main.humidity}%</li>
            <li><strong>Shamol tezligi:</strong> {data.wind.speed} m/s</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Three;
