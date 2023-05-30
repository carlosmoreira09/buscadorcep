import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import { CgArrowUpO } from "react-icons/cg";
import teste from '../services/ApiCep';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import apiadvice from '../services/ApiAd';

function Advice() {

  const [advice, setAdvice] = useState("")
  const navigate = useNavigate();
  const [text,setText] = useState("Click para gerar seu Conselho")

  async function handleSearch() { 
    
    try { 

      const response = await apiadvice.get('advice')
      console.log(response.data.slip)
      setAdvice(response.data.slip)
      setText("Click para gerar outro Conselho")
    } catch(error) {
    
      alert(error.message)
      
    }

  }
  async function backHome() { 
    navigate('/')
  }

  return (
    <div className="container">
      <h1 className="title"> Conselho Diário</h1>
      
      <button className="FiArrowLeft" onClick={handleSearch}>
      {text}
      <CgArrowUpO site={25} color="#FFF"/>
       </button>

        {Object.keys(advice).length > 0 && ( 
              <main className="main">
              <h3>Daily Advice:</h3>              
              <span>{advice.advice}</span>
              </main>
        )}      
       
        <br/>
        <button className="FiArrowLeft" onClick={backHome}>
        <FiArrowLeft size={25} color="#FFF"/>Return
      </button>
    </div>
  );
}

export default Advice;
