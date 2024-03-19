"use client"

import Link from "next/link";
import Inovux from "../../../../public/INOVUX.png";
import Image from "next/image";
import { useState } from "react";

export const SignIn = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    

    return (
        <div className="max-w-[350px] h-[400px] border-2 border-gray-400 m-auto flex flex-col mt-32   ">
            <Image  className="-mt-9 m-auto" alt="inovux" src={Inovux} height={150} width={230}></Image>
            <div className="flex flex-col p-2 mt-4 ">
                <div className="flex-1 mt-10">
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text"  placeholder="E-mail" className=" w-[320px] placeholder:text-[#545454] outline-none border-b-2 text-[#545454] hover:border-black hover:placeholder:text-black hover:text-black" />
                </div>
                <div className="flex-1 mt-14">
                    <input type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder="Senha" className=" outline-none border-b-2 placeholder:text-[#545454] w-[320px] hover:border-black hover:placeholder:text-black hover:text-black" />
                </div>
            </div>
            <div className="">

                <Link href="/SignUp" className="justify-end flex mr-3 mt-7  ">
                    <div className="font-bold text-gray-700">Registrar</div>
                </Link>

            </div>
            <div className="mb-[300px] m-auto mt-[80px]">
                <button className="border rounded-full w-28 h-9 font-semibold text-base border-gray-600">Login</button>
            </div>
        </div>
    )
}

export default SignIn;