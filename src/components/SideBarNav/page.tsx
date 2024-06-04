"use client"
import React, { useState } from 'react';
import { HomeOutlined, MenuOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import Archive from '@mdi/react';
import { mdiArchive } from '@mdi/js';
import ConfigModal from '../Config/page';

const SideBarNav = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => {
        setModalVisible(true);
    };

    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <div className="border bg-[#F6F6F6] text-[#34b3e2] h-[750px] max-w-[250px] rounded-sm p-4 space-y-4 flex-col justify-center items-center">
            <Link href="/">
                <Image src='/stockTrackr.png' alt="Logo" width={200} height={200} />
            </Link>
            <div className='flex flex-col justify-between h-[520px]'>
                <div className="space-y-4 justify-center items-center ">
                    <Link href='/' className="flex items-center ml-5 cursor-pointer hover:text-[#18637e]">
                        <div><HomeOutlined width={30} height={30} className='mr-4' style={{ fontSize: 25 }} /></div>
                        <div>Home</div>
                    </Link>
                    <Link href="/products" className="flex items-center ml-5 cursor-pointer hover:text-[#18637e]">
                        <div className='mr-4'><MenuOutlined /></div>
                        <div>Produtos</div>
                    </Link>
                    <Link href="/stock" className="flex items-center ml-5 cursor-pointer hover:text-[#18637e]">
                        <Archive path={mdiArchive} size={1} className='mr-4' />
                        <div>Estoque</div>
                    </Link>
                </div>
                <div className='flex items-center ml-2 cursor-pointer hover:text-[#18637e]' onClick={showModal}>
                    <SettingOutlined style={{ fontSize: 25 }} className='mr-2' />
                    <span className='mt-1'>Configurações</span>
                </div>
                <ConfigModal visible={modalVisible} handleOk={handleOk} handleCancel={handleCancel} />
            </div>
        </div>
    )
}

export default SideBarNav;
