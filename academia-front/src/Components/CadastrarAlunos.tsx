import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CadastrarAlunos() {
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [peso, setPeso] = useState<string>('');
  const [altura, setAltura] = useState<string>('');

  function handleSubmit(e: any) {
    e.preventDefault();

    const newAluno = {
      nome,
      idade,
      peso,
      altura
    };

    axios.post('http://localhost:5024/academia/alunos/cadastrar', newAluno)
      .then(response => {
        console.log(response);
        setNome('');
        setIdade('');
        setPeso('');
        setAltura('');
        alert("Aluno Cadastrado");
      })
      .catch(error => {
        console.error("Problema ao cadastrar o Aluno:", error);
        alert('Erro ao cadastrar aluno. Verifique o console para mais detalhes.');
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Aluno</h2>
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
            <label htmlFor="idade" className="font-semibold">
              Idade:
            </label>
            <input
              type="number"
              id="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="peso" className="font-semibold">
              Peso:
            </label>
            <input
              type="number"
              id="peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="altura" className="font-semibold">
              Altura:
            </label>
            <input
              type="number"
              id="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Cadastro de Aluno
          </button>
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-2">
            Voltar para o Home
        </Link>
        </form>
      </div>
    </div>
  );
}  

export default CadastrarAlunos;
