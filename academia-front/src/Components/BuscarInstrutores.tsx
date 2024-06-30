import React, { useEffect, useState } from 'react';
import { Instrutor } from '../Interface/Instrutor';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BuscarInstrutores() {
    const [instrutores, setInstrutores] = useState<Instrutor[]>([]);

    console.log(instrutores);

    function carregarInstrutores() {
        axios.get('http://localhost:5024/academia/instrutores/listar')
            .then(response => {
                setInstrutores(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar lista de Instrutores!", error);
            });
    }

    function deletar(id: number) {
        axios.delete('http://localhost:5024/academia/instrutores/delete/' + id) 
            .then(response => { console.log(response); })
            .catch(error => { console.error("Problema ao deletar instrutor", error); });
    }

    useEffect(() => {
        carregarInstrutores();
    }, []);

    return (
        <div className="m-4">
            <h1 className="p-1 px-5 mx-20 bg-cinza-claro rounded-full font-mono text-lg text-center text-verde">Lista de Instrutores cadastrados</h1>
            <table className="m-7 border-2">
                <thead className="border-2">
                    <tr className="">
                        <th className="font-semibold text-branco">Id</th>
                        <th className="font-semibold text-branco">Nome</th>
                        <th className="font-semibold text-branco">Especialidade</th>
                    </tr>
                </thead>
                <tbody>
                    {instrutores.map(instrutor => (
                        <tr key={instrutor.id}>
                            <td>{instrutor.id}</td>
                            <td>{instrutor.nome}</td>
                            <td>{instrutor.especialidade}</td>
                            <td>
                                <button onClick={() => { deletar(instrutor.id!); }}>
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BuscarInstrutores;
