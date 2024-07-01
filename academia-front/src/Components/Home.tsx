import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChild, FaClipboard } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdDirectionsRun } from "react-icons/md";
import { GiStrongMan } from "react-icons/gi";

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

    const openModal = (content: React.ReactNode) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setModalContent(null);
        setIsModalOpen(false);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100"> 
            <div className="text-center mt-5">
                <h1 className="p-3 px-5 mx-20 bg-gray-200 rounded-full font-mono text-lg text-center text-green-600">Bem-vindo ao Sistema de Academia</h1>
                <GiStrongMan className='text-9xl mb-4 mx-auto'/>
                <div className="grid grid-cols-2 gap-4 mt-6">    
                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <FaChild className="text-3xl mb-2"/>
                        <h2 className="text-lg font-semibold mb-4">Alunos</h2> 
                        <button onClick={() => openModal(
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-4">Listar Alunos</h2>
                                <Link to="/alunos" className="block mb-2">Listar Alunos</Link>
                                <Link to="/alunos/cadastro" className="block">Cadastrar Aluno</Link>
                            </div>
                        )} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Alunos
                        </button>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <FaClipboard className="text-3xl mb-2"/>
                        <h2 className="text-lg font-semibold mb-4">Instrutores</h2>
                        <button onClick={() => openModal(
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-4">Listar Instrutores</h2>
                                <Link to="/instrutores" className="block mb-2">Listar Instrutores</Link>
                                <Link to="/instrutores/cadastro" className="block">Cadastrar Instrutor</Link>
                            </div>
                        )} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Instrutores
                        </button>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <CgGym className="text-4xl mb-2"/>
                        <h2 className="text-lg font-semibold mb-4">Equipamentos</h2>
                        <button onClick={() => openModal(
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-4">Listar Equipamentos</h2>
                                <Link to="/equipamentos" className="block mb-2">Listar Equipamentos</Link>
                                <Link to="/equipamentos/cadastro" className="block">Cadastrar Equipamento</Link>
                            </div>
                        )} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Equipamentos
                        </button>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <MdDirectionsRun className="text-4xl mb-2"/>
                        <h2 className="text-lg font-semibold mb-4">Treinos</h2>
                        <button onClick={() => openModal(
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-4">Listar Treinos</h2>
                                <Link to="/treinos/listar" className="block mb-2">Listar Treinos</Link>
                                <Link to="/treinos" className="block">Cadastrar Treino</Link>
                            </div>
                        )} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block text-center">
                            Treinos
                        </button>
                    </div>
                </div>
            </div>


            {isModalOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
                    <div className="bg-white p-6 max-w-lg mx-auto rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                        {modalContent}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
