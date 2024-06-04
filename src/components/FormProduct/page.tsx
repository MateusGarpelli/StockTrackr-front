"use client"
import axios from 'axios';
import React, { FormEvent, useState } from 'react';

const FormProducts = () => {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [peso, setPeso] = useState("");
    const [local, setLocal] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [codigo, setCodigo] = useState("");

    const URL = "http://172.17.114.23:5000/";

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${URL}cadastrarProduto`, {
                nome,
                peso,
                valor,
                categoria,
                codigo,
                local,
                quantidade,
            });
            console.log(res.data);
            alert("Produto cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error);
            alert("Erro ao cadastrar produto.");
        }
    };

    return (
        <div className='bg-gray-100 flex items-center justify-center mt-7'>
            <div className='w-full max-w-2xl bg-white p-8 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-6 text-gray-800'>Cadastro de Produto</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className='block text-gray-700'>Nome do Produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Nome"
                                name="nomeProduto"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Valor do produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Valor"
                                name="valor"
                                type="number"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Categoria do produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Categoria"
                                name="categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Nome do local</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Local"
                                name="local"
                                value={local}
                                onChange={(e) => setLocal(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Quantidade</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Quantidade"
                                name="quantidade"
                                type="number"
                                value={quantidade}
                                onChange={(e) => setQuantidade(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Código do Produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Código"
                                name="codigo"
                                type="number"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Peso do Produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Peso"
                                name="peso"
                                type="number"
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className='w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormProducts;
