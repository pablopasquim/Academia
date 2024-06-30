import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import BuscarAlunos from './Components/BuscarAlunos';
import CadastrarAlunos from './Components/CadastrarAlunos';
import EditarAluno from './Components/EditarAluno';
import BuscarInstrutores from './Components/BuscarInstrutores';
import CadastrarInstrutor from './Components/CadastrarInstrutor';
import BuscarEquipamentos from './Components/BuscarEquipamentos';
import CadastrarEquipamento from './Components/CadastrarEquipamento';
import CadastroTreino from './Components/CadastroTreino';
import Home from './Components/Home'; 
import './index.css';


function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/alunos" element={<BuscarAlunos />} />
                    <Route path="/alunos/cadastro" element={<CadastrarAlunos />} />
                    <Route path="/alunos/atualizar/:id" element={<EditarAluno />} />
                    <Route path="/instrutores" element={<BuscarInstrutores />} />
                    <Route path="/instrutores/cadastro" element={<CadastrarInstrutor />} />
                    <Route path="/equipamentos" element={<BuscarEquipamentos />} />
                    <Route path="/equipamentos/cadastro" element={<CadastrarEquipamento />} />
                    <Route path="/treinos" element={<CadastroTreino/>} /> 
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
=======
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
>>>>>>> 5f02c7b1b8ddd6b341310937777fb4b9443af6c6
