import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BuscarTreinos(){
  const [treinos, setTreinos] = useState<any[]>([]);

    useEffect(() => {
    carregarTreinos();
    }, []);  

  function carregarTreinos() {
    axios.get('http://localhost:5024/academia/treinos/buscar')
        .then(response => {
            setTreinos(response.data);
            console.log("Alunos carregados:", response.data);
        })
        .catch(error => {
            console.error("Erro ao buscar lista de Alunos!", error);
        });
    }


    function deletar(id: number) {
        console.log(`Tentando deletar o Treino com id: ${id}`);
        axios.delete(`http://localhost:5024/academia/treinos/delete/${id}`)
          .then(response => {
            console.log("Treino deletado com sucesso:", response);
            alert('Treino deletado com sucesso!');
            carregarTreinos(); 
          })
          .catch(error => {
            console.error("Problema ao deletar o Treino", error);
            console.error("Resposta do servidor:", error.response);
            alert("Erro ao deletar o Treino. Verifique o console para mais detalhes.");
          });
      }
      


  return (
    <div className="container mx-auto">
      <h1 className="p-1 px-5 mx-20 bg-gray-200 rounded-full font-mono text-lg text-center text-green-600">Lista de Treinos</h1>
      <div className="flex justify-center">
        <table className="w-full lg:w-4/5 xl:w-3/4 mt-8 mb-16 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome do Treino</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aluno</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instrutor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipamento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {treinos.map((treino: any) => (
              <tr key={treino.id}>
                <td className="px-6 py-4 whitespace-nowrap">{treino.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{treino.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap">{treino.aluno?.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap">{treino.instrutor?.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap">{treino.equipamento?.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap">{treino.descricao}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => deletar(treino.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/treinos" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
          Cadastro de Treino
        </Link>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
          Voltar para o Home
        </Link>
      </div>
    </div>
  );
};

export default BuscarTreinos;
