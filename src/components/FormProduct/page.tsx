"use client"
import React, { useState } from 'react';

const FormProducts = () => {
    const [formData, setFormData] = useState({
        nomeProduto: "",
        valor: "",
        categoria: "",
        local: "",
        quantidade: "",
        codigo: "",
        peso: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (formData.nomeProduto.length < 2) {
            newErrors.nomeProduto = 'O Produto deve ter no mínimo 2 letras';
        }
        if (formData.valor < 1) {
            newErrors.valor = 'O valor tem que ser no mínimo 1';
        }
        if (formData.categoria.length < 2) {
            newErrors.categoria = 'A Categoria deve ter no mínimo 2 letras';
        }
        if (formData.local.length < 2) {
            newErrors.local = 'O local deve ter no mínimo 2 letras';
        }
        if (formData.quantidade < 1) {
            newErrors.quantidade = 'A Quantidade deve ser no mínimo 1';
        }
        if (formData.codigo < 1) {
            newErrors.codigo = 'O Codigo deve ser no mínimo 1';
        }
        if (formData.peso < 1) {
            newErrors.peso = 'O Peso deve ser no mínimo 1 kilo';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className=' bg-gray-100 flex items-center justify-center mt-7 '>
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
                                value={formData.nomeProduto}
                                onChange={handleChange}
                            />
                            {errors.nomeProduto && <span className='text-red-600 text-sm'>{errors.nomeProduto}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Valor do produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Valor"
                                name="valor"
                                type="number"
                                value={formData.valor}
                                onChange={handleChange}
                            />
                            {errors.valor && <span className='text-red-600 text-sm'>{errors.valor}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Categoria do produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Categoria"
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleChange}
                            />
                            {errors.categoria && <span className='text-red-600 text-sm'>{errors.categoria}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Nome do local</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Local"
                                name="local"
                                value={formData.local}
                                onChange={handleChange}
                            />
                            {errors.local && <span className='text-red-600 text-sm'>{errors.local}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Quantidade</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Quantidade"
                                name="quantidade"
                                type="number"
                                value={formData.quantidade}
                                onChange={handleChange}
                            />
                            {errors.quantidade && <span className='text-red-600 text-sm'>{errors.quantidade}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Código do Produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Código"
                                name="codigo"
                                type="number"
                                value={formData.codigo}
                                onChange={handleChange}
                            />
                            {errors.codigo && <span className='text-red-600 text-sm'>{errors.codigo}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Peso do Produto</label>
                            <input
                                className='w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                                placeholder="Peso"
                                name="peso"
                                type="number"
                                value={formData.peso}
                                onChange={handleChange}
                            />
                            {errors.peso && <span className='text-red-600 text-sm'>{errors.peso}</span>}
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
