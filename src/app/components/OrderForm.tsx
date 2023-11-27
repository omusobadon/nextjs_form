import { PostOrder,GetOrder } from "../api";
import React, { ChangeEvent, FormEvent, useState, } from "react";

const OrderForm = () => {


    const [product, setproduct] = useState<number>()
    const [num, setnum] = useState<number>()


//onChangeの関数

    const changeproduct = (e: ChangeEvent<HTMLInputElement>) =>
    {  let changeValue: number =  Number(e.target.value);
        setproduct(changeValue)
    };

    const changenum =  (e: ChangeEvent<HTMLInputElement>) =>
    {  let changeValue: number =  Number(e.target.value);
      setnum(changeValue)
    };

//submitの関数

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  

    await PostOrder({
      customer: 3,
      product: product,
      num: num,
    });
  }
  


  return (
    <div>
      <form onSubmit={handleSubmit}>


        <label>製品</label>
        <input
          type="text"
          name="product"
          onChange={changeproduct}
          required
        />
      
        <label>容量</label>
        <input
          type="text"
          name="num"
          onChange={changenum}
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

export default OrderForm