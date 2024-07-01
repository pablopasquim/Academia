import React from 'react';
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
import BuscarTreino from './Components/BuscarTreino';

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
                    <Route path="/treinos/listar" element={<BuscarTreino/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
