"use client"
import { PostOrder,GetOrder } from "../api";
import React, { ChangeEvent, FormEvent, useState, } from "react";
import Image from "next/image";

export default  function page () {

    const [product, setproduct] = useState<number>()
    const [num, setnum] = useState<number>()

    const [start,setstart] = useState('')
    const [end,setend] = useState('') 





//onChangeの関数

    const changeproduct = (e: ChangeEvent<HTMLInputElement>) =>
    {  let changeValue: number =  Number(e.target.value);
        setproduct(changeValue)
    };

    const changenum =  (e: ChangeEvent<HTMLInputElement>) =>
    {  let changeValue: number =  Number(e.target.value);
      setnum(changeValue)
    };

    const changestart = (e: ChangeEvent<HTMLInputElement>) =>
    setstart(e.target.value);

    const changeend =  (e: ChangeEvent<HTMLInputElement>) =>
    setend(e.target.value);



//submitの関数

    const handleSubmit  =  (e: FormEvent) => {
      e.preventDefault();
  

         PostOrder({
      customer: 1,
      product: product,
      start: "2021-01-01 01:55:00+00",
      end: "2021-01-10 01:55:00+00",
      num : num

    });

  };
  


  return (
    
    <div>


      <form onSubmit={handleSubmit}>


<label>
    <input
          type="radio"
          name="product"
          onChange={changeproduct}
          value={"1"}
          required
        />
        CD
  </label>

<label>
   <input
        type="radio"
        name="product"
        onChange={changeproduct}
        value={"2"}
        required
    />
    DVD
</label>     

<label>
   <input
          type="radio"
          name="product"
          onChange={changeproduct}
          value={"3"}
          required
    />
    Blu-rayディスク
</label>
      
<p></p>
        <input
          type="number"
          name="num"
          onChange={changenum}
          max={80}
          min={1}
          required
        /><label>枚</label>
<p></p>
<input
          type="datetime-local" 
          name="start" 
          onChange={changestart}
           step={1}         />

          <input
          type="datetime-local"
          name="end" 
          onChange={changeend}
          step={1} />


<p></p>
        <button
          type="submit"
          name="submit">
          予約  </button>


      </form>

    </div>
  )
}

