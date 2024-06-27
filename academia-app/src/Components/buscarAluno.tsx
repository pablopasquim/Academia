import React, { useEffect, useState } from 'react';
import { Aluno } from '../Interface/Aluno';

const BuscarAlunos: React.FC = () => {
    const [alunos, setAluno] = useState<Aluno[]>([]);

    useEffect(() => {
        fetch('http://localhost:5024/academia/academia/alunos/buscar') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setAluno(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(Aluno => (
                        <tr key={Aluno.Id}>
                            <td>{Aluno.Id}</td>
                            <td>{Aluno.Nome}</td>
                            <td>{Aluno.Idade}</td>
                            <td>{Aluno.Peso}</td>
                            <td>{Aluno.Altura}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuscarAlunos;