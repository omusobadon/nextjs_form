'use client'
import { PostInquiry } from '../../api';
import React, { ChangeEvent, FormEvent, useState, } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';
import Header from '@/components/Head';
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

          
            <form onSubmit={handleSubmit}>
                <label>氏名</label>
                <input
                    type="text"
                    name="Lname"
                    pattern="[\u4E00-\u9FFF\u3040-\u309Fー]*"
                    placeholder="日本"
                    onChange={changeLN}
                    value={Lname}
                    required />
                <input
                    type="text"
                    name="Fname"
                    pattern="[\u4E00-\u9FFF\u3040-\u309Fー]*"
                    placeholder="電子"
                    onChange={changeFN}
                    value={Fname}
                    required />

                <label>メールアドレス</label>
                <input
                    type="mail"
                    name="email"
                    placeholder="nihon@mail.com"
                    onChange={changeEmail}
                    value={Email}
                    required />


                <label>お問い合わせ項目</label>
                <select
                    name="Purpose"
                    onChange={(e) =>
                        setPurpose(e.target.value)}>

                    <option value="null">選択してください</option>
                    <option value="Reservation">予約について</option>
                    <option value="Return">返却について</option>
                    <option value="Guarantee/Compensation">保証・補償制度について</option>
                    <option value="Eligibility">利用資格について</option>
                    <option value="Vehicle/Option">車両・オプションについて</option>
                    <option value="ther">その他</option>
                </select>


                <label>お問い合わせ内容</label>
                <input
                    type="message"
                    name="message"
                    onChange={changeMessage}
                    value={Message}
                    required
                />


                <button
                    type="submit"
                    name="submit">
                    送信  </button>
            </form>
        </>
    )
}
