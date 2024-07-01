import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Aluno } from "../Interface/Aluno";
import { Link } from "react-router-dom";

function EditarAluno() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  useEffect(() => {
    console.log("ID do aluno:", id);  
    if (id) {
      axios.get(`http://localhost:5024/academia/alunos/buscar/${id}`)
        .then((response) => {
          console.log("Dados do aluno:", response.data); 
          const aluno: Aluno = response.data;
          setNome(aluno.nome);
          setIdade(aluno.idade.toString());
          setPeso(aluno.peso.toString());
          setAltura(aluno.altura.toString());
        })
        .catch((error) => {
          console.error("Erro ao buscar aluno:", error);
        });
    }
  }, [id]);

  function alterarAluno(e: any) {
    e.preventDefault();

    const aluno: Aluno = {
      id: 0,
      nome: nome,
      idade: parseFloat(idade),
      peso: parseFloat(peso),
      altura: parseFloat(altura),
    };

    axios.put(`http://localhost:5024/academia/alunos/atualizar/${id}`, aluno)
      .then(() => {
        alert("Cadastro do Aluno alterado com sucesso");
        navigate("/alunos");
      })
      .catch((error) => {
        console.error("Erro ao alterar aluno:", error); 
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Editar Aluno</h2>
        <form onSubmit={alterarAluno} className="max-w-lg mx-auto">
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
            Salvar Alterações
          </button>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-2">
            Voltar para o Home
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EditarAluno;
