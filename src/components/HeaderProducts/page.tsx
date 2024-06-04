"use client"
import { BellOutlined, HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link";
import Archive from '@mdi/react';
import { mdiArchive } from '@mdi/js';
import { useState } from "react";
import ModalProfile from "../ModalProfile/page";

const HeaderProducts = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div className="w-[1000px]  m-auto mt-4 justify-between flex ">
            <div className="flex items-center cursor-pointer">
                <Link href='/products'>
                <div className='mr-4 text-[#34b3e2] text-[27px]'><MenuOutlined /></div>
                </Link>
                <span className=" text-[#34b3e2]">Produtos</span>
            </div>
            <div>
                <div >
                    <UserOutlined style={{color: "#34b3e2", fontSize: 28,}} className="cursor-pointer" onClick={showModal}/>
                    <ModalProfile 
                    visible={visible} 
                    handleOk={handleOk} 
                    handleCancel={handleCancel} 
                />
                </div>
            </div>
        </div>
    )
}

export default HeaderProducts;
