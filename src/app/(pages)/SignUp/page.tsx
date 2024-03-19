"use client"
import Image from "next/image";
import Link from "next/link";
import Inovux from "../../../../public/INOVUX.png";
import setaEsquerda from "../../../../public/arrow-left-line.png";
import { useState } from "react";

export const SignUp = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="max-w-[350px] h-[400px] border-2 border-gray-400 m-auto flex flex-col mt-32   ">
            <Image className="-mt-9 m-auto" alt="inovux" src={Inovux} height={150} width={230}></Image>
            <div className="flex flex-col p-2 mt-4">
                <Link href="/SignIn" className="w-[30px] h-[30px] ">
                    <Image src={setaEsquerda} alt="setaEsquerda" width={30} height={30}></Image>
                </Link>
                <div className="flex-1 mt-7">
                    <input type="text" value={nome}  onChange={(e) => {setNome(e.target.value)}} placeholder="Nome" className=" w-[320px] placeholder:text-[#545454] outline-none border-b-2 text-[#545454] hover:border-black hover:placeholder:text-black hover:text-black" />
                </div>
                <div className="flex-1 mt-10">
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="E-mail" className=" w-[320px] placeholder:text-[#545454] outline-none border-b-2 text-[#545454] hover:border-black hover:placeholder:text-black hover:text-black" />
                </div>
                <div className="flex-1 mt-12">
                    <input type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder="Senha" className=" outline-none border-b-2 placeholder:text-[#545454] w-[320px] hover:border-black hover:placeholder:text-black hover:text-black" />
                </div>
            </div>
            <div className="mb-[300px] m-auto mt-[50px]">
                <button className="border rounded-full w-36 h-11 font-semibold text-base border-gray-600">Cadastrar</button>
            </div>
        </div>
    )
}

export default SignUp;