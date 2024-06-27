import React, { useState } from 'react';
import { Aluno } from "../Interface/Aluno";
import { METHODS } from 'http';
import { error } from 'console';

function CadastrarAluno(){
    const [nome, setNome] = useState<string>('');
    const [idade, setIdade] = useState<number>(0);
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);

    function handleSubmit (e: any){
        e.preventDefault();

        const newAluno = {
            nome,
            idade,
            peso,
            altura
        };
        fetch('http://localhost:5024/academia/alunos/cadastrar',{
            method: 'POST',
            headers: {
                'Content-Type': 'apliication/json'
            },
            body: JSON.stringify(newAluno)
            })
        .then(response =>{
            if(!response.ok){
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data =>{
            setNome('');
            setIdade(0);
            setPeso(0);
            setAltura(0);
        })
        .catch(erro => {
            console.error('Erro', erro);
        });
        return (
            <div>
                <h2>Cadastrar Novo Produto</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                    </label>
                    <label>
                        Descrição:
                        <input type="text" value={idade} onChange={e => setIdade(Number(e.target.value))} required />
                    </label>
                    <label>
                        Preço:
                        <input type="number" value={peso} onChange={e => setPeso(Number(e.target.value))} required />
                    </label>
                    <label>
                        Quantidade:
                        <input type="number" value={altura} onChange={e => setAltura(Number(e.target.value))} required />
                    </label>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    };
};
export default CadastrarAluno;
