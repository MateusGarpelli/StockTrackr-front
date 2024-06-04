"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StockMain = () => {
    const URL = "http://192.168.1.102:5000/";
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProdutos = async () => {
            try {
                const res = await axios.get(`${URL}produto`);
                setProdutos(res.data);
            } catch (err) {
                console.error("Erro ao buscar produtos:", err);
            } finally {
                setLoading(false);
            }
        };
        getProdutos();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
};

export default StockMain;
