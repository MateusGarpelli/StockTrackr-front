"use client"
import React, { FormEvent, useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Price from '@mdi/react';
import { mdiCash } from '@mdi/js';
import Storage from '@mdi/react';
import { mdiArchive } from '@mdi/js';
import Alert from '@mdi/react';
import { mdiAlertBox } from '@mdi/js';
import Quantity from '@mdi/react';
import { mdiCounter } from '@mdi/js';
import GraphicsCharts from '../GraphicsCharts/page';
import axios from 'axios';

const MenuMain = () => {

    const URL = "http://172.17.114.23:5000/";

    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const resTotal = await axios.get(`${URL}quantidade`);
                const total = resTotal.data.total;
                setQuantity(total);
    
                const resSomaTotal = await axios.get(`${URL}preco`);
                const somaTotal = resSomaTotal.data.soma_total;
                setPrice(somaTotal);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };
    
        fetchData();
    }, []);
    

    useEffect(() => {

        const getValues = async () => {

            const res = await axios.get(`${URL}quantidade`)
                .then(res => {
                    setQuantity(res.data.quantity)
                })
            const resPrice = await axios.get(`${URL}preco`
            )
                .then(resPrice => {
                    setPrice(resPrice.data.price)
                })
        };
        getValues();
    }, []
    )



    return (
        <div >
            <div className="max-w-[1200px] m-auto grid grid-cols-3 gap-4 mt-6 ">
                <div className='flex bg-[#EEE] py-2 px-4 rounded-lg w-[250px]' >
                    <Quantity path={mdiCounter} size={1} color='#18637e' />
                    <span className='ml-3'>Quantidade:{quantity}</span>
                </div>
                <div className='flex bg-[#EEE] py-2 px-4 rounded-lg w-[250px] '>
                    <Price path={mdiCash} size={1} color='#18637e' />
                    <span className='ml-3'>Custo: {price}</span>
                </div>
                <div className='flex bg-[#EEE] py-2 px-4 rounded-lg w-[250px]'>
                    <Alert path={mdiAlertBox} size={1} color='#18637e' />
                    <span className='ml-3'>Itens necessários: 0</span>
                </div>
            </div>
            <GraphicsCharts />
        </div>
    )
}

export default MenuMain;
