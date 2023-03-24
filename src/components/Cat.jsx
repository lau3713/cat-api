import axios from "axios";
import { useState } from "react";


function Cat() {

  const [cat, setCat] = useState()


  const handleClick = async () => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
    if (response.status === 200) {
      // console.log('youpi');
      const data = response.data[0]
      // console.log(data);
      setCat(data)
    }
  }


  return ( 
    <div className="App">
      <div className="image">
        <img src={cat.url} />
      </div>
        <p>
          Edit and save to reload.
        </p>
        <button onClick={handleClick}>
          MIAOU !
        </button>
    </div>
   );
}

export default Cat;