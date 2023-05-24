import { FiSearch,FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import apicep from '../services/ApiCep'
import '../style.css'
import { useNavigate } from 'react-router-dom'

function BuscadorCep() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  const [errorObj, setErrorObj] = useState({});
  const navigate = useNavigate();

  async function handleSearch() { 
    if(input === "") { 
      alert("Digite um CEP")
      return;
    }

    try { 

      const response = await apicep.get(`${input}/json`);
      setCep(response.data)
      setInput("")

    } catch(error) {
      
      navigate('')
      alert("Digite um CEP Valido")
      setInput("")
      setCep({})
    }

  }
  async function backHome() { 
    navigate('/')
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>

    <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu cep"
        value={input}
        onChange={ (e) => setInput(e.target.value)
        }
        />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#FFF"/>
      </button>
      
      <button className="FiArrowLeft" onClick={backHome}>
        <FiArrowLeft size={25} color="#FFF"/>Return
      </button>
    </div>

        {Object.keys(cep).length > 0 && ( 
              <main className="main">
              <h2>CEP: {cep.cep}</h2>
              
              <span>Logradouro: {cep.logradouro}</span>
              <span>Complemento: {cep.complemento}</span>
              <span>Bairro: {cep.bairro}</span>
              <span>Estado: {cep.uf}</span>
            </main>
        )}


    </div>
  );
}

export default BuscadorCep;
