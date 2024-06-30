import React, { useEffect, useState } from 'react';
import { Aluno } from '../Interface/Aluno';
import axios from 'axios';
<<<<<<< HEAD
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
=======

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
>>>>>>> 5f02c7b1b8ddd6b341310937777fb4b9443af6c6
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
<<<<<<< HEAD
                            <td className="flex justify-between items-center">
                            <button onClick={() => deletar(aluno.id!)}>Deletar</button>
                            <Link to={`/alterar/${aluno.id}`}><button>Alterar</button></Link>
                            </td>
=======
>>>>>>> 5f02c7b1b8ddd6b341310937777fb4b9443af6c6
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

<<<<<<< HEAD
export default BuscarAlunos;
=======
export default BuscarAlunos;
>>>>>>> 5f02c7b1b8ddd6b341310937777fb4b9443af6c6
