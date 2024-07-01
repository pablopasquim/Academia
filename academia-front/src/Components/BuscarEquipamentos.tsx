import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BuscarEquipamentos() {
    const [equipamentos, setEquipamentos] = useState<any[]>([]);

    useEffect(() => {
        carregarEquipamentos();
    }, []);

    function carregarEquipamentos() {
        axios.get('http://localhost:5024/academia/equipamentos/buscar')
            .then(response => {
                setEquipamentos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar lista de Equipamentos!", error);
            });
    }

    function deletarEquipamento(id: number) {
        axios.delete(`http://localhost:5024/academia/equipamentos/deletar/${id}`)
            .then(response => {
                console.log("Equipamento deletado com sucesso:", response);
                alert('Equipamento deletado com sucesso!');
                carregarEquipamentos();
            })
            .catch(error => {
                console.error("Problema ao deletar o Equipamento", error);
                alert("Erro ao deletar equipamento. Verifique o console para mais detalhes.");
            });
    }

    return (
        <div className="container mx-auto">
            <h1 className="p-1 px-5 mx-20 bg-gray-200 rounded-full font-mono text-lg text-center text-green-600">Lista de Equipamentos</h1>
            <div className="flex justify-center">
                <table className="w-full lg:w-4/5 xl:w-3/4 mt-8 mb-16 divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {equipamentos.map((equipamento: any) => (
                            <tr key={equipamento.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{equipamento.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{equipamento.nome}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{equipamento.tipo}</td>               
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => deletarEquipamento(equipamento.id)} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'>Deletar</button>
                                </td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/cadastro-equipamento" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
                    Cadastro de Equipamento
                </Link>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">
                    Voltar para o Home
                </Link>
            </div>
        </div>
    );
}

export default BuscarEquipamentos;
