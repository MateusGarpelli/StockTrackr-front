"use client"
import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ModalProfile = ({ visible, handleOk, handleCancel }) => {
    const [userData, setUserData] = useState(null);

    const URL = "http://172.17.114.23:5000/"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}user`);
                setUserData(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        };

        if (visible) {
            fetchData();
        }
    }, [visible]);

    return (
        <Modal
            title="Perfil do Usuário"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancelar
                </Button>,
                <Button key="ok" type="primary" onClick={handleOk} style={{ backgroundColor: '#34b3e2', borderColor: '#34b3e2' }}>
                    OK
                </Button>,
            ]}
        >
            {userData ? (
                <div className='pb-3'>
                    <p><strong>Nome:</strong> {userData.nome}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Idade:</strong> {userData.idade}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        <div>
            <Link className='mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' href="SignIn">Sair</Link>
        </div>
        </Modal>
    );
}

export default ModalProfile;
