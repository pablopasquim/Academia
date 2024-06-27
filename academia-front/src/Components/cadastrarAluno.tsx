import React, { useState } from 'react';

const CadastrarAluno: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [idade, setIdade] = useState<number>(0);
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newAluno = {
            nome,
            idade,
            peso,
            altura
        };

        fetch('http://localhost:5024/academia/alunos/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAluno)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setNome('');
            setIdade(0);
            setPeso(0);
            setAltura(0);
            alert('Aluno cadastrado com sucesso!');
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao cadastrar aluno. Verifique o console para mais detalhes.');
        });
    }

    return (
        <div>
            <h2>Cadastrar Novo Aluno</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                </label>
                <label>
                    Idade:
                    <input type="number" value={idade} onChange={e => setIdade(Number(e.target.value))} required />
                </label>
                <label>
                    Peso:
                    <input type="number" value={peso} onChange={e => setPeso(Number(e.target.value))} required />
                </label>
                <label>
                    Altura:
                    <input type="number" value={altura} onChange={e => setAltura(Number(e.target.value))} required />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarAluno;
