import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch() {
    if (input === '') {
      alert("Preencha algum cep!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data)
    }
    catch
    {
      alert("Ops, erro ao buscar o  CEP. Tente novamente mais tarde.");
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="digite o cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button class="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className='main'>
        <h2> CEP: 07124380</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: algum Complemento</span>
        <span>Bairro: Jardim Diogo</span>
        <span>Guarulhos, SP</span>

      </main>

    </div>
  );
}

export default App;
