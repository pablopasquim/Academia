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
                carregarAlunos(); // Atualiza a lista após deletar
            })
            .catch(error => {
                console.error("Problema ao deletar o Aluno", error);
                console.error("Resposta do servidor:", error.response);
                alert("Erro ao deletar aluno. Verifique o console para mais detalhes.");
            });
    }

    return (
        <div className="m-4">
            <h1 className="p-1 px-5 mx-20 bg-cinza-claro rounded-full font-mono text-lg text-center text-verde">Lista de Alunos cadastrados</h1>
            <table className="m-7 border-2">
                <thead className="border-2">
                    <tr>
                        <th className="font-semibold text-branco">Id</th>
                        <th className="font-semibold text-branco">Nome</th>
                        <th className="font-semibold text-branco">Idade</th>
                        <th className="font-semibold text-branco">Peso</th>
                        <th className="font-semibold text-branco">Altura</th>
                        <th className="font-semibold text-branco">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.idade}</td>
                            <td>{aluno.peso}</td>
                            <td>{aluno.altura}</td>
                            <td className="flex justify-between items-center">
                            <button onClick={() => deletar(aluno.id!)}>Deletar</button>
                            <Link to={`/alterar/${aluno.id}`}><button>Alterar</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuscarAlunos;
