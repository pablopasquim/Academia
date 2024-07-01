import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BuscarInstrutores() {
    const [instrutores, setInstrutores] = useState<any[]>([]);

    useEffect(() => {
        carregarInstrutores();
    }, []);

    function carregarInstrutores() {
        axios.get('http://localhost:5024/academia/instrutores/buscar')
            .then(response => {
                setInstrutores(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar lista de Instrutores!", error);
            });
    }

    function deletarInstrutor(id: number) {
        axios.delete(`http://localhost:5024/academia/instrutores/delete/${id}`)
            .then(response => {
                console.log("Instrutor deletado com sucesso:", response);
                alert('Instrutor deletado com sucesso!');
                carregarInstrutores();
            })
            .catch(error => {
                console.error("Problema ao deletar o Instrutor", error);
                alert("Erro ao deletar instrutor. Verifique o console para mais detalhes.");
            });
    }

    return (
        <div className="container mx-auto">
            <h1 className="p-1 px-5 mx-20 bg-gray-200 rounded-full font-mono text-lg text-center text-green-600">Lista de Instrutores</h1>
            <div className="flex justify-center">
                <table className="w-full lg:w-4/5 xl:w-3/4 mt-8 mb-16 divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Especialidade</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {instrutores.map((instrutor: any) => (
                            <tr key={instrutor.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{instrutor.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{instrutor.nome}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{instrutor.especialidade}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => deletarInstrutor(instrutor.id)} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/cadastro-instrutor" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
                    Cadastro de Instrutor
                </Link>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
                    Voltar para o Home
                </Link>
            </div>
        </div>
    );
}

export default BuscarInstrutores;
