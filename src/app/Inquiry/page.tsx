'use client'
import { PostInquiry } from '../../api';
import React, { ChangeEvent, FormEvent, useState, } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';
import Header from '@/components/Head';
import Footer from '@/components/Foot';
export default function Inquiry() {



const changeLN = (e: ChangeEvent<HTMLInputElement>) =>
setLName(e.target.value)

const changeFN = (e: ChangeEvent<HTMLInputElement>) =>
setFName(e.target.value)

const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
setEmail(e.target.value)

const changeMessage = (e: ChangeEvent<HTMLInputElement>) =>
setMessage(e.target.value)



    const [Lname, setLName] = useState('')
    const [Fname, setFName] = useState('')
    const [Email, setEmail] = useState('')
    const [Purpose, setPurpose] = useState('')
    const [Message, setMessage] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();


        await PostInquiry({
            id: uuidv4(),
            Lname: Lname,
            Fname: Fname,
            Email: Email,
            purpose: Purpose,
            massage: Message
             });

        //フォーム初期表示の値

        setLName('');
        setFName('');
        setEmail('');
        setMessage('');
    };


    return (
        <>

<Header/>
    <div className="mt-8">
        <form onSubmit={handleSubmit} className="w-10/12 mx-auto md:max-w-md">
            
            <div className="mb-8">
                <label  className="text-sm block">お名前</label>
                <input
                    type="text"
                    name="Lname"
                    pattern="[\u4E00-\u9FFF\u3040-\u309Fー]*"
                    placeholder="日本"
                    onChange={changeLN}
                    value={Lname}
                    required 
                    className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />

                    <input
                    type="text"
                    name="Fname"
                    pattern="[\u4E00-\u9FFF\u3040-\u309Fー]*"
                    placeholder="電子"
                    onChange={changeFN}
                    value={Fname}
                    required
                    className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />
            </div>
            <br />
            <div className="mb-8">
                <label className="text-sm block">Eメール</label>
                <input
                    type="mail"
                    name="email"
                    placeholder="nihon@mail.com"
                    onChange={changeEmail}
                    value={Email}
                    required
                    className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50"/>
            </div>
            <br />
            <div className="mb-8">
                <label  className="text-sm block">項目</label>
                            <br />
                <select
                    name="Purpose"
                    onChange={(e) =>
                        setPurpose(e.target.value)}
                        className='w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50'>
                    <option value="" hidden>選択してください</option>
                    <option value="Reservation">予約について</option>
                    <option value="Return">返却について</option>
                    <option value="Guarantee/Compensation">保証・補償制度について</option>
                    <option value="Eligibility">利用資格について</option>
                    <option value="Vehicle/Option">車両・オプションについて</option>
                    <option value="ther">その他</option>
                </select>
            </div>
            <div className="mb-8">
                <label className="text-sm block">内容</label>
                <input
                    type="text"
                    name="message"
                    onChange={changeMessage}
                    value={Message}
                    required
                 className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50"/>

                 
            </div>

            <button
                    type="submit"
                    name="submit">
                    送信  </button>

        </form>
        <br />
        <br />
        <br />
        
    </div>
<Footer/>
        </>
    )
}
