"use client"
import { PostOrder,GetOrder } from "../../api";
import React, { ChangeEvent, FormEvent, useState, } from "react";
import Link from 'next/link';
import Image from "next/image";




export default function page () {

    const [product, setProduct] = useState<number>()
    const [num, setNum] = useState<number>()
    const [start,setStart] = useState('')
    const [end,setEnd] = useState('') 


//onChangeの関数

    const changeProduct = (e: React.ChangeEvent<HTMLInputElement>) =>
    {  let changeValue: number =  Number(e.target.value);
        setProduct(changeValue)
    };

    const changeNum =  (e: React.ChangeEvent<HTMLInputElement>) =>
    {  let changeValue: number =  Number(e.target.value);
      setNum(changeValue)
    };

    const changeStart = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStart(e.target.value)

    const changeEnd =  (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnd(e.target.value);


//submitの関数

    const handleSubmit  =  async (e: FormEvent) => {
      e.preventDefault();
  
//POSTするデータ

    await  PostOrder({
      customer: 1,
      product: product,
      start: start + "+09:00",
      end: end + "+09:00",
      num: num
    });
  };



  return (
        
    <>

      <form onSubmit={handleSubmit}>

<p></p>
<label>
    <input
          type="radio"
          name="product"
          onChange={changeProduct}
          value={1}
          required
        />
        バス
  </label>


<label>
   <input
        type="radio"
        name="product"
        onChange={changeProduct}
        value={2}
        required
    />
    トラック
</label>     


<label>
   <input
          type="radio"
          name="product"
          onChange={changeProduct}
          value={3}
          required
    />
    ダンプカー
</label>
      
<p></p>

        <input
          type="number"
          name="num"
          onChange={changeNum}
          max={80}
          min={1}
          required
        /><label>枚</label>
        
<p></p>

          <input
          type="datetime-local" 
          name="start" 
          onChange={changeStart}
          step={1}      
          
         />

          <input
          type="datetime-local"
          name="end" 
          onChange={changeEnd}          
          step={1}
                />


        <button
          type="submit"
          name="submit">
          予約  </button>


      </form>

    </>
  )
}

