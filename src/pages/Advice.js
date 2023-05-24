import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import { CgArrowUpO } from "react-icons/cg";
import teste from '../services/ApiCep';
import '../style.css';
import { useNavigate } from 'react-router-dom';

function Advice() {

  const [advice, setAdvice] = useState("")
  const navigate = useNavigate();

  async function handleSearch() { 
    
    try { 

      const response = await teste.get('advice')
      console.log(response.data.slip)
      setAdvice(response.data.slip)
      
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
        Click para Gerar seu Conselho
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
