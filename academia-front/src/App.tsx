import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CadastrarAluno from './Components/cadastrarAluno';
import './index.css';
import BuscarAlunos from './Components/BuscarAlunos';

function App(){
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