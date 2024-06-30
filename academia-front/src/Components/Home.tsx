import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Sistema de Academia</h1>
                <div className="grid grid-cols-2 gap-4">    
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Alunos</h2>
                        <Link to="/alunos" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Listar Alunos
                        </Link>
                        <Link to="/alunos/cadastro" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md block text-center mt-2">
                            Cadastrar Aluno
                        </Link>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Instrutores</h2>
                        <Link to="/instrutores" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Listar Instrutores
                        </Link>
                        <Link to="/instrutores/cadastro" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md block text-center mt-2">
                            Cadastrar Instrutor
                        </Link>
                    </div>


                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Equipamentos</h2>
                        <Link to="/equipamentos" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Listar Equipamentos
                        </Link>
                        <Link to="/equipamentos/cadastro" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md block text-center mt-2">
                            Cadastrar Equipamento
                        </Link>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Treinos</h2>
                        <Link to="/treinos/listar" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Listar Treinos
                        </Link>
                        <Link to="/treinos" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md block text-center mt-2">
                            Cadastrar Treino
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
