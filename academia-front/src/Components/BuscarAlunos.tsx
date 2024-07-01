import React, { useEffect, useState } from 'react';
import { Aluno } from '../Interface/Aluno';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BuscarAlunos() {
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    useEffect(() => {
        carregarAlunos();
    }, []);

    function carregarAlunos() {
        axios.get('http://localhost:5024/academia/alunos/listar')
            .then(response => {
                setAlunos(response.data);
                console.log("Alunos carregados:", response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar lista de Alunos!", error);
            });
    }

    function deletar(id: number) {
        console.log(`Tentando deletar aluno com id: ${id}`);
        axios.delete(`http://localhost:5024/academia/alunos/delete/${id}`)
            .then(response => {
                console.log("Aluno deletado com sucesso:", response);
                alert('Aluno deletado com sucesso!');
                carregarAlunos(); 
            })
            .catch(error => {
                console.error("Problema ao deletar o Aluno", error);
                console.error("Resposta do servidor:", error.response);
                alert("Erro ao deletar aluno. Verifique o console para mais detalhes.");
            });
    }

    return (
        <div className="container mx-auto">
            <h1 className="p-1 px-5 mx-20 bg-gray-200 rounded-full font-mono text-lg text-center text-green-600">Lista de Alunos cadastrados</h1>
            <table className="w-full lg:w-4/5 xl:w-3/4 mt-8 mb-16 divide-y divide-gray-200 mx-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Id</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Nome</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Idade</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Peso</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Altura</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {alunos.map(aluno => (
                        <tr key={aluno.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{aluno.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{aluno.nome}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{aluno.idade}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{aluno.peso}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{aluno.altura}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded mr-2" onClick={() => deletar(aluno.id)}>Deletar</button>
                                <Link to={`/alunos/atualizar/${aluno.id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">Alterar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <Link to="/cadastro-aluno" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
                    Cadastro de Aluno
                </Link>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
                    Voltar para o Home
                </Link>
            </div>
        </div>
    );
};

export default BuscarAlunos;
