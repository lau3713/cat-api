import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function Cat() {

  const [catUrl, setCatUrl] = useState()
  

  const loadData = async () => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
    if (response.status === 200) {
      // console.log('youpi');
      const data = response.data[0]
      // console.log(cat.breeds[0].name);
      setCatUrl(data)
     
      
    }
  }

  useEffect(() =>{
    loadData()
  }, [])

  return ( 
    
   );
}

export default Cat;