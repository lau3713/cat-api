import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';


function App() {

  const [cat, setCat] = useState()

  
    const loadData = async () => {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
      if (response.status === 200) {
       
        const data = response.data[0]
        
        setCat(data)
      }
    }
   

  useEffect(() => {
     loadData()
  }, [])

  const handleClick = () => {
    loadData()
  }

  return cat && (
    <div className='App'>

      <h1>THE CAT API</h1>

    <div className="cat">
      <div className="image">
        <img src={cat.url} />
      </div>   

      <div className="informations">
        <p><strong>Name : </strong>{cat.breeds[0].name}</p>
        <p><strong>Origin : </strong>{cat.breeds[0].origin}</p>
        <p><strong>Temperament : </strong>{cat.breeds[0].temperament}</p>
        <p><strong>Description : </strong>{cat.breeds[0].description}</p>

      </div>
      </div>    
      <div className='button'>
        <button className='miaou' onClick={handleClick}>
          <p>MIAOU !</p>
        </button>

      </div>
    
    </div>
  );
}

export default App;
