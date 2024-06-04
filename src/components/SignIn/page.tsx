"use client"

import Link from "next/link";
import Inovux from "../../../public/stockTrackr.png";
import Image from "next/image";
import { FormEvent, useState } from "react";
import axios from "axios";

export const SignIn = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const URL = "http://172.17.57.127:5000/";

    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await axios.post(`${URL}loginUser`, {
            email,
            senha,
        })

        console.log(res);
        
    };

    return (
        <div className="max-w-[350px] h-[400px] border-2 border-gray-400 m-auto flex flex-col mt-32   ">
            <Image  className="-mt-16 m-auto" alt="inovux" src={Inovux} height={600} width={400}></Image>
            <form action=""onSubmit={handleSubmit} className="mb-[125px]" >
            <div className="flex flex-col p-2  ">
                <div className="flex-1 mt-10">
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email"  placeholder="E-mail" className=" w-[320px] placeholder:text-[#545454] outline-none border-b-2 text-[#545454] hover:border-[#34b3e2] hover:placeholder:text-[#34b3e2] hover:text-[#34b3e2]" />
                </div>
                <div className="flex-1 mt-14">
                    <input type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder="Senha" className=" outline-none border-b-2 placeholder:text-[#545454] w-[320px] hover:border-[#34b3e2] hover:placeholder:text-[#34b3e2] hover:text-[#34b3e2]" />
                </div>
            </div>
            <div className="">

                <Link href="/SignUp" className="justify-end flex mr-3 mt-7   ">
                    <div className="font-bold text-gray-700 hover:text-[#34b3e2]">Registrar</div>
                </Link>

            </div>
            <Link href="/HomeMain" className=" ml-[9px]">
                <button className="border rounded-full w-28 h-9 font-semibold text-base border-gray-600 hover:text-[#34b3e2] hover:border-[#34b3e2]">Login</button>
            </Link>
            </form>
        </div>
    )
}

export default SignIn;