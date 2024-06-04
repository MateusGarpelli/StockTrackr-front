"use client"
import {  HomeOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from 'react';
import ModalProfile from "../ModalProfile/page";

const HeaderMenu = () => {
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
        <div className="max-w-[1200px] m-auto mt-4 justify-between flex">
            <div className="flex items-center cursor-pointer">
                <Link href='/'>
                    <HomeOutlined style={{ color: "#34b3e2", fontSize: 32 }} />
                </Link>
                <span className="ml-2 text-[#34b3e2]">Home</span>
            </div>
            <div>
                <UserOutlined 
                    style={{ color: "#34b3e2", fontSize: 28 }} 
                    className="cursor-pointer" 
                    onClick={showModal}
                />
                <ModalProfile 
                    visible={visible} 
                    handleOk={handleOk} 
                    handleCancel={handleCancel} 
                />
            </div>
        </div>
    )
}

export default HeaderMenu;
