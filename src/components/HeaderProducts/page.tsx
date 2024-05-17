import { BellOutlined, HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link";
import Archive from '@mdi/react';
import { mdiArchive } from '@mdi/js';

const HeaderProducts = () => {
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
                    <BellOutlined style={{marginRight:8, color: "#34b3e2", fontSize: 28,}} className="cursor-pointer" />
                    <UserOutlined style={{color: "#34b3e2", fontSize: 28,}} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderProducts;
