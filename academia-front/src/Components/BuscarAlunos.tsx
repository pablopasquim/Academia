import React, { useEffect, useState } from 'react';
import { Aluno } from '../Interface/Aluno';
import axios from 'axios';

function BuscarAlunos(){
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    console.log(alunos)

    function carregarAlunos(){
        axios.get('http://localhost:5024/academia/alunos/listar').then(response =>{
            setAlunos(response.data)
        }).catch(error => {
            console.error("Erro ao buscar lista de Alunos!", error)
        })
    }

    useEffect(() => {
        carregarAlunos();
        // fetch('http://localhost:5024/academia/alunos/buscar')
        //     .then(response => {
        //         console.log('Resposta da API:', response);
        //         if (!response.ok) {
        //             throw new Error('Erro na requisição: ' + response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log('Dados recebidos:', data);
        //         setAluno(data);
        //     })
        //     .catch(error => {
        //         console.error('Erro:', error);
        //     });
    }, []);
    

    return (
        <div>
            <h1>Lista de Alunos</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Peso</th>
                        <th>Altura</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuscarAlunos;