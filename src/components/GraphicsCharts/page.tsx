"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const URL = "http://172.17.114.23:5000/";

const GraphicsCharts = () => {
    const [produtos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${URL}produto`);
                setProducts(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    const productData = produtos.map(produto => [produto.nome, produto.quantidade]);
    const productTableData = produtos.map(produto => [produto.nome, produto.local, produto.quantidade === 0]);
    const productWeightData = produtos.map(produto => [produto.nome, produto.peso, "#34b3e2"]);

    const dataPieChart = [
        ["Produto", "Quantidade"],
        ...productData
    ];

    const dataTable = [
        ["Lista de entrada de item", "local", "Em falta?"],
        ...productTableData
    ];

    const dataColumnChart = [
        ["Produtos", "Peso", { role: "style" }],
        ...productWeightData
    ];

    const optionsPieChart = {
        title: "Quantidade de Produtos",
    };

    const optionsTable = {
        title: "Lista de Produtos",
        curveType: "function",
        legend: { position: "bottom" },
        pageSize: 10,
    };

    return (
        <div>
            <div className='flex'>
                <div>
                    <Chart
                        chartType="PieChart"
                        data={dataPieChart}
                        options={optionsPieChart}
                        width={"100%"}
                        height={"300px"}
                    />
                </div>
                <div>
                    <Chart 
                        chartType="ColumnChart" 
                        width="600px" 
                        height="300px" 
                        data={dataColumnChart} 
                    />
                </div>
            </div>

            <div>
                <Chart
                    chartType="Table"
                    width={"100%"}
                    height="400px"
                    data={dataTable}
                    options={optionsTable}
                />
            </div>
        </div>
    );
}

export default GraphicsCharts;
