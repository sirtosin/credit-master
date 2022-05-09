import React from 'react';
import moment from 'moment';
const History = () => {
    const data = JSON.parse(localStorage.getItem("location"));

    return (
        <div>
            <h1 className='text-4xl capitalize  py-10 text-center font-bold'>
               view history
            </h1>
            {data && data.length > 0 ? (<div className='flex flex-col items-center m-5 lg:flex-row'>
                {data.map((data, index) => (
                    <div key={index + data.name} className='m-5' >
                        <section className="w-[300px] h-[250px] bg-white shadow-lg p-9 rounded-lg lg:w-[400px]">

                            <h2 className="text-3xl font-semibold">{data ? data.name : null}, {data && data.sys ? data.sys.country : null}</h2>
                            <h2 className="text-md font-bold text-gray-400">{moment().utcOffset(data.timezone / 60).format("h:mm A")}</h2>
                            <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">humidity: {data.main ? <p className="ml-2">{data.main.humidity}%</p> : null}</h2>

                            <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">temperature: {data.main ? data.main.temp.toFixed() : null}°F</h2>
                            <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">weather:  {data.weather ? <p className="ml-2">{data.weather[0].main}</p> : null}</h2>
                            <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">Wind Speed:  {data.wind ? (
                                <p className="ml-2">{data.wind.speed.toFixed()} MPH</p>
                            ) : null}</h2>


                        </section>
                    </div>))}
            </div>
            )
                : <h3 className='capitalize text-center text-xl  flex items-center justify-center w-full my-20'> no history</h3>}
          
        </div>

    )
}

export default History
