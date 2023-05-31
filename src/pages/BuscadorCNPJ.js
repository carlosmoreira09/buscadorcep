import { FiSearch,FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import apicnpj from '../services/ApiCnpj'
import '../style.css'
import { useNavigate } from 'react-router-dom'

function BuscadorCnpj() {

  const [input, setInput] = useState('')
  const [cnpj, setCnpj] = useState({})
  const [data,setData] = useState('')
  
  const navigate = useNavigate();

  async function handleCep() { 
    if(input === "") { 
      alert("Digite um CNPJ")
      return;
    }

    try { 

        if(input.length > 14) { 
        var cnpjtratado = input
                .replace(".","")
                .replace(".","")
                .replace("/","")
                .replace("-","");
            console.log(cnpjtratado);
        }

      const response = await apicnpj.get(`${cnpjtratado}`);
      console.log(response.data)
      console.log(response.data.data_inicio_atividade)
      var data = response.data.data_inicio_atividade.split('-')
      setData(data[2] + "/" + data[1] + "/" + data[0]);
      setCnpj(response.data)
      setInput("")

    } catch(error) {
      
      navigate('')
      alert(error.message)
      setInput("")
      setCnpj({})
    }

  }
  async function backHome() { 
    navigate('/')
  }

  return (
    <div className="container">
      <h1 className="title"> Identificador de CNPJ</h1>

    <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o CNPJ"
        value={input}
        onChange={ (e) => setInput(e.target.value)
        }
        />

      <button className="buttonSearch" onClick={handleCep}>
        <FiSearch size={25} color="#FFF"/>
      </button>
      
      <button className="FiArrowLeft" onClick={backHome}>
        <FiArrowLeft size={25} color="#FFF"/>Return
      </button>
    </div>

        {Object.keys(cnpj).length > 0 && ( 
              <main className="main">
              <h2>CNPJ: {cnpj.cnpj}</h2>

              <span>Nome Fantasia: {cnpj.nome_fantasia}</span>
              <span>Razão Social: {cnpj.razao_social}</span>
              <span>Data Da Criação: {data}</span>
              <span>Nome Socio 1: {cnpj.qsa[0].nome_socio}</span>
              <span>Logradouro: {cnpj.logradouro}</span>
              <span>Cidade: {cnpj.municipio}</span>
              <span>Estado: {cnpj.uf}</span>
            </main>
        )}


    </div>
  );
}
export default BuscadorCnpj;
