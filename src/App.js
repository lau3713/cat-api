import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Cat from './components/Cat';

function App() {

  const [cat, setCat] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
      if (response.status === 200) {
        // console.log('youpi');
        const data = response.data[0]
        // console.log(data);
        setCat(data)
      }
    }
    loadData()
  }, [])

  return cat && (
    <>
    <Cat cat={cat}/>
    </>
  );
}

export default App;
