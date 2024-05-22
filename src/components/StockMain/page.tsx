"use client"
import axios from 'axios';
import React, { useEffect } from 'react';

const StockMain = () => {

    const URL = "http://192.168.1.102:5000/";

    // useEffect(() => {
    //     const getProdutos = async () => {
    //         const res = await axios.get(`${URL}`)
    //         .then(res => {
    //             setProdutos(res.data.quantity)
    //         })
    //     }
    // },[]);

    const produtos = [
        { nome: "Produto 1", local: "Armazém A", faltando: true },
        { nome: "Produto 2", local: "Armazém B", faltando: false },
        { nome: "Produto 3", local: "Armazém C", faltando: true },
        { nome: "Produto 4", local: "Armazém D", faltando: false },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Estoque de Produtos</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Nome do Produto</th>
                            <th className="py-2 px-4 border-b">Local</th>
                            <th className="py-2 px-4 border-b">Faltando</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{produto.nome}</td>
                                <td className="py-2 px-4 border-b">{produto.local}</td>
                                <td className="py-2 px-4 border-b">
                                    {produto.faltando ? (
                                        <span className="text-red-500">Sim</span>
                                    ) : (
                                        <span className="text-green-500">Não</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StockMain;
