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
    <>
    <div className="App">
      <div className="image">
        <img src={cat.url} />
      </div>       
  
        <button onClick={handleClick}>
          MIAOU !
        </button>
    </div>
    </>
  );
}

export default App;
