import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Aluno } from "../Interface/Aluno";

function EditarAluno() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5024/academia/alunos/buscar/${id}`)
        .then((response) => {
          const aluno: Aluno = response.data;
          setNome(aluno.nome);
          setIdade(aluno.idade.toString());
          setPeso(aluno.peso.toString());
          setAltura(aluno.altura.toString());
        })
        .catch((error) => {
          console.error("Erro ao buscar aluno:", error);
        });
    }
  }, [id]);

  function alterarAluno(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const alunoAtualizado: Aluno = {
      id: parseInt(id || "0"),
      nome: nome,
      idade: parseFloat(idade),
      peso: parseFloat(peso),
      altura: parseFloat(altura),
    };

    axios.put(`http://localhost:5024/academia/alunos/atualizar/${id}`, alunoAtualizado)
      .then(() => {
        navigate("/pages/aluno/listar");
      })
      .catch((error) => {
        console.error("Erro ao alterar aluno:", error);
      });
  }

  return (
    <div>
      <h1>Alterar Aluno</h1>
      <form onSubmit={alterarAluno}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso:</label>
          <input
            type="number"
            step="0.01"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Altura:</label>
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EditarAluno;
