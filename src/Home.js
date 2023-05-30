import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  async function handleSearch() {
    
    const findapi = document.getElementById("apifind").value;
    switch(findapi) {
      case 'cep':
        navigate('/buscadorcep')     
        break;
      case 'advice':
        navigate('/advice')
        break;
      default:
        navigate('/')
    }
    
   };

    return (
    <div className="container">
      <h1 className="title">API House</h1>

    <div className="containerInput">
        <select id="apifind">
          <option>Selecione uma API</option>
          <option value="cep" >Buscador CEP</option>
          <option value="advice">Conselho Diário</option>
          <option value='api1'>API 1</option>
          <option value='api1'>API 1</option>
          <option value='api1'>API 1</option>  
        </select>

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#FFF"/>
      </button>

    </div>
    </div>
  );
}
