'use client';
import { PostInquiry } from '../api';
import React, { ChangeEvent, FormEvent, useState, } from 'react';


export default function honten() {


    const [Lname, setLName] = useState('')
    const [Fname, setFName] = useState('')
    const [Email, setEmail] = useState('')
    const [FAtel, setFAtel] = useState('')
    const [FCtel, setFCtel] = useState('')
    const [FLtel, setFLtel] = useState('')
    const [CAtel, setCAtel] = useState('')
    const [CCtel, setCCtel] = useState('')
    const [CLtel, setCLtel] = useState('')
    const [Purpose, setPurpose] = useState('')
    const [Message, setMessage] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();


        await PostInquiry({
            id: "4",
            Lname: Lname,
            Fname: Fname,
            Email: Email,
            FAtel: FAtel,
            FCtel: FCtel,
            FLtel: FLtel,
            CAtel: CAtel,
            CCtel: CCtel,
            CLtel: CLtel,
            purpose: Purpose,
            massage: Message
             });

        //フォーム初期表示の値

        setLName('');
        setFName('');
        setEmail('');
        setFAtel('');
        setFCtel('');
        setFLtel('');
        setCAtel('');
        setCCtel('');
        setCLtel('');
        setMessage('');
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>氏名</label>
                <input
                    type="text"
                    name="Lname"
                    pattern="[\u4E00-\u9FFF\u3040-\u309Fー]*"
                    placeholder="日本"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setLName(e.target.value)
                    }
                    value={Lname}
                    required />
                <input
                    type="text"
                    name="Fname"
                    pattern="[\u4E00-\u9FFF\u3040-\u309Fー]*"
                    placeholder="電子"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFName(e.target.value)
                    }
                    value={Fname}
                    required />

                <label>メールアドレス</label>
                <input
                    type="mail"
                    name="email"
                    placeholder="nihon@mail.com"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    value={Email}
                    required />


                <label>電話番号</label>
                <input
                    type="tel"
                    name="FAtel"
                    placeholder="03"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFAtel(e.target.value)
                    }
                    value={FAtel}
                />-<input
                    type="tel"
                    name="FCtel"
                    placeholder="1234"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFCtel(e.target.value)
                    }
                    value={FCtel}
                />-<input
                    type="tel"
                    name="FLtel"
                    placeholder="5678"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFLtel(e.target.value)
                    }
                    value={FLtel}
                />


                <label>携帯番号</label>
                <input
                    type="tel"
                    name="CAtel"
                    placeholder="090"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setCAtel(e.target.value)
                    }
                    value={CAtel}
                />-<input
                    type="tel"
                    name="CCtel"
                    placeholder="1234"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setCCtel(e.target.value)
                    }
                    value={CCtel}
                />-<input
                    type="tel"
                    name="CLtel"
                    placeholder="5678"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setCLtel(e.target.value)
                    }
                    value={CLtel}
                />

                <label>お問い合わせ項目</label>
                <select
                    name="Purpose"
                    onChange={(e) =>
                        setPurpose(e.target.value)}>

                    <option value="null">選択してください</option>
                    <option value="New application">新規申し込み</option>
                    <option value="MNP transfer/transfer">MNP転出/転入</option>
                    <option value="Plan change">プラン変更</option>
                    <option value="Cancellation">解約</option>
                    <option value="SIM reissue/resize">SIM再発行/サイズ変更</option>
                    <option value="Communication trouble">通信トラブル</option>
                </select>


                <label>お問い合わせ内容</label>
                <input
                    type="message"
                    name="message"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setMessage(e.target.value)
                    }
                    value={Message}
                    required
                />


                <button
                    type="submit"
                    name="submit">
                    送信  </button>
            </form>
        </div>
    )
}
