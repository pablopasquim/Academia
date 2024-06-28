import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CadastrarAluno from './Components/cadastrarAluno';
import BuscarAlunos from './Components/buscarAluno';
import './index.css';

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Listar Aluno</Link>
              </li>
              <li>
                <Link to="/cadastro">Cadastrar Alunos</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<BuscarAlunos />} />
            <Route path="/cadastro" element={<CadastrarAluno/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
};

export default App;