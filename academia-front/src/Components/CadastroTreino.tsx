import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CadastroTreino: React.FC = () => {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState<any[]>([]);
  const [instrutores, setInstrutores] = useState<any[]>([]);
  const [equipamentos, setEquipamentos] = useState<any[]>([]);
  const [alunoId, setAlunoId] = useState('');
  const [instrutorId, setInstrutorId] = useState('');
  const [equipamentoId, setEquipamentoId] = useState('');
  const [nomeTreino, setNomeTreino] = useState('');
  const [descricaoTreino, setDescricaoTreino] = useState('');

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await axios.get('http://localhost:5024/academia/alunos/listar');
        setAlunos(response.data);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };

    const fetchInstrutores = async () => {
      try {
        const response = await axios.get('http://localhost:5024/academia/instrutores/listar');
        setInstrutores(response.data);
      } catch (error) {
        console.error('Erro ao buscar instrutores:', error);
      }
    };

    const fetchEquipamentos = async () => {
      try {
        const response = await axios.get('http://localhost:5024/academia/equipamentos/listar');
        setEquipamentos(response.data);
      } catch (error) {
        console.error('Erro ao buscar equipamentos:', error);
      }
    };

    fetchAlunos();
    fetchInstrutores();
    fetchEquipamentos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5024/academia/treinos/cadastrar', {
        alunoId,
        instrutorId,
        equipamentoId,
        nome: nomeTreino,
        descricao: descricaoTreino,
      });
      alert('Treino cadastrado com sucesso!');
      navigate('/treinos');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro ao cadastrar treino:', error.response?.data || error.message);
      } else {
        console.error('Erro inesperado ao cadastrar treino:', error);
      }
      alert('Erro ao cadastrar treino. Verifique o console para mais detalhes.');
    }
  };

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Cadastro de Treino</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="aluno" className="font-semibold">
              Aluno:
            </label>
            <select
              id="aluno"
              value={alunoId}
              onChange={(e) => setAlunoId(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Selecione um aluno</option>
              {alunos.map((aluno: any) => (
                <option key={aluno.id} value={aluno.id}>
                  {aluno.nome}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="instrutor" className="font-semibold">
              Instrutor:
            </label>
            <select
              id="instrutor"
              value={instrutorId}
              onChange={(e) => setInstrutorId(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Selecione um instrutor</option>
              {instrutores.map((instrutor: any) => (
                <option key={instrutor.id} value={instrutor.id}>
                  {instrutor.nome}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="equipamento" className="font-semibold">
              Equipamento:
            </label>
            <select
              id="equipamento"
              value={equipamentoId}
              onChange={(e) => setEquipamentoId(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Selecione um equipamento</option>
              {equipamentos.map((equipamento: any) => (
                <option key={equipamento.id} value={equipamento.id}>
                  {equipamento.nome}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="nomeTreino" className="font-semibold">
              Nome do Treino:
            </label>
            <input
              id="nomeTreino"
              type="text"
              value={nomeTreino}
              onChange={(e) => setNomeTreino(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="descricaoTreino" className="font-semibold">
              Descrição do Treino:
            </label>
            <textarea
              id="descricaoTreino"
              value={descricaoTreino}
              onChange={(e) => setDescricaoTreino(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Cadastrar Treino
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Voltar para Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroTreino;
