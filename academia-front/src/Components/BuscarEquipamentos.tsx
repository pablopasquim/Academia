import React, { useEffect, useState } from 'react';
import { Equipamento } from '../Interface/Equipamento';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BuscarEquipamentos() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);

  console.log(equipamentos);

  function carregarEquipamentos() {
    axios.get('http://localhost:5024/academia/equipamentos/listar')
      .then(response => {
        setEquipamentos(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar lista de Equipamentos!", error);
      });
  }

  function deletar(id: number) {
    axios.delete('http://localhost:5024/academia/equipamentos/delete/' + id)
      .then(response => { 
        console.log(response);
        carregarEquipamentos(); 
      })
      .catch(error => { 
        console.error("Problema ao deletar equipamento", error); 
      });
  }

  useEffect(() => {
    carregarEquipamentos();
  }, []);

  return (
    <div className="m-4">
      <h1 className="p-1 px-5 mx-20 bg-cinza-claro rounded-full font-mono text-lg text-center text-verde">Lista de Equipamentos Cadastrados</h1>
      <table className="m-7 border-2">
        <thead className="border-2">
          <tr className="">
            <th className="font-semibold text-branco">Id</th>
            <th className="font-semibold text-branco">Nome</th>
            <th className="font-semibold text-branco">Tipo</th>
            <th className="font-semibold text-branco">Ações</th>
          </tr>
        </thead>
        <tbody>
          {equipamentos.map(equipamento => (
            <tr key={equipamento.id}>
              <td>{equipamento.id}</td>
              <td>{equipamento.nome}</td>
              <td>{equipamento.tipo}</td>
              <td>
                <button onClick={() => { deletar(equipamento.id) }}>
                  Deletar
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuscarEquipamentos;
