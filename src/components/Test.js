import React, { useEffect, useState } from 'react'

function Test() {
  const [data, setData] = useState({})

    // const handleIP = () => { 
    //     fetch('https://api.geoapify.com/v1/ipinfo?apiKey=602ca6018c914bfcbc5464b9d8260aa0')
    //     .then((res) => res.json())
    //     .then((res) => setData(res));
    // }

    useEffect(() => { 
      fetch('https://api.geoapify.com/v1/ipinfo?apiKey=602ca6018c914bfcbc5464b9d8260aa0')
      .then((res) => res.json())
      .then((res) => setData(res));
    }, [])

    console.log(data.country)
  return (
    <div>
        {/* <button onClick={handleIP}></button> */}
        <h1>You are in: {data?.country?.name}</h1>
    </div>
  )
}

export default Test