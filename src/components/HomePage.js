import React, { useState } from 'react'
import './HomePage.scss'

function HomePage() {
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    const BASE_URL = 'https://imdb8.p.rapidapi.com/auto-complete?q='

    const handleData = async () => {
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': 'fa476acbf1mshb63319c823defd5p12256ajsn2611606eaffc',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };

        const response = await fetch(`${BASE_URL}${query}`, options);
	    const result = await response.json();
        console.log(result)
        setData(result.d)
    }

    const handleQuery = (e) => { 
        setQuery(e.target.value)
    }

  return (
    <div>
        <h1>Home Page</h1>
        <input type='text' onChange={handleQuery} />
        <button onClick={(e) => handleData(e)}>Fetch</button>
        <div>
        {data.map((item) => 
            <div key={item.id} className='main__section-container'>
                <div className='image__wrapper'>
                    <img src={item.i?.imageUrl} />
                </div>
                <div className='desc__wrapper'>
                    <h2>{item.l}</h2>
                    <h4>{item.q}</h4>
                </div>
            </div>)}
        </div>
    
    </div>
  )
}

export default HomePage