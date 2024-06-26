import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CadastrarEquipamento() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newEquipamento = {
      nome,
      tipo,
    };

    axios.post('http://localhost:5024/academia/equipamentos/cadastrar', newEquipamento)
      .then(response => {
        console.log(response);
        setNome('');
        setTipo('');
        alert("Equipamento Cadastrado");
      })
      .catch(error => {
        console.error("Problema ao cadastrar o Equipamento:", error);
        alert('Erro ao cadastrar equipamento. Verifique o console para mais detalhes.');
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Equipamento</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col mb-4">
            <label htmlFor="nome" className="font-semibold">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="quantidade" className="font-semibold">
              Tipo:
            </label>
            <input
              type="text"
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
          >
            Cadastrar Equipamento
          </button>
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block m-3">
            Voltar para o Home
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CadastrarEquipamento;
