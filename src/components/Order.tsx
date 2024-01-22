import { PostOrder } from "@/api";
import React, { FormEvent, useState, } from "react";
import Image from "next/image";
import Car1 from "../../public/img/Car1.png";
import Car2 from "../../public/img/Car2.png";
import Car3 from "../../public/img/Car3.png";
import Car4 from "../../public/img/Car4.png";
import Car5 from "../../public/img/Car5.png";
import Car6 from "../../public/img/Car6.png";
import {  format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { useSession, signOut } from "next-auth/react";


interface OrderProps {
  StockShop: number
  StartShop: string  
  }

export default function Order ({ StockShop , StartShop } : OrderProps) {

    const [start,setStart] = useState('')
    const [starttime,setStarttime] = useState('')
    const [end,setEnd] = useState('')
    const [endtime,setEndtime] = useState('')
    const [remark,setRemark] = useState('')
    const [product,setProduct] = useState<number>()



    const { data: session, status } = useSession();
    const Detalis = () => {
      console.log(session);
    };
  
//onChangeの関数


    const changeStart = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStart(e.target.value)

    const changeEnd =  (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnd(e.target.value);

    const changeProduct = (e: React.ChangeEvent<HTMLInputElement>) =>
    {  let changeValue: number =  Number(e.target.value);
        setProduct(changeValue)
    };

    
//submitの関数

    const handleSubmit  =  async (e: FormEvent) => {
      e.preventDefault(); await PostOrder({

      customer_id: 1,
      start_at: start + starttime,
      end_at: end + endtime,
      remark:  remark,
      detail: [
        {   
            stock_id:  product ,
            qty: 1 
        }
    ]
    
    });

    if (stock_id == 'undefined'){
      
    } 

    if(window.confirm('送信してよろしいですか？')){
      return true;
  }
  else{ 
      window.alert('キャンセルされました'); 
      return false; 

  }};

  const utcDate = new Date()
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
  const jstString = format(jstDate, 'yyyy-MM-dd')





  const car1 =   1 + StockShop;
  const car2 =   3 + StockShop;
  const car3 =   5 + StockShop;
  const car4 =   7 + StockShop;
  const car5 =   9 + StockShop;
  const car6 =   11 + StockShop;

  return (
        
    <>      





        <form onSubmit={handleSubmit} className="w-10/12 mx-auto md:max-w-md">
        
        
        <div className="flex">


            <div className="md-4 pl-1 pr-2  py-2">
            <input
          type="radio"
          id="Car1"
          name="product"
          onChange={changeProduct}
          value={car1}
          required
          className="hidden peer w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />
        <label htmlFor="Car1" className="inline-flex items-center justify-between w-48 p-5  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-300 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-1/12 text-sm font-semibold">Buggy</div>
                <div className="text-xs">aa</div>
                <div className="text-xs">aa</div>
            </div>
            <Image src={Car1} alt="Car1" className="flex w-1/4 h-auto"/></label>
        </div>

        <div className="md-4 pr-1 pl-2 py-2">
        
            <input
          type="radio"
          id="Car2"
          name="product"
          onChange={changeProduct}
          value={car2}
          required
          className="hidden peer w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />
        <label htmlFor="Car2" className="inline-flex items-center justify-between w-48 p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-300 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="block">
                <div className="w-1/12 text-sm font-semibold">Motorcycle</div>
                <div className="text-xs">aa</div>
                <div className="text-xs">aa</div>
            </div>
          <Image src={Car2} alt="Car2"  className="flex w-1/4 h-auto"/></label>
        </div>

      </div>
      <div className="flex ">

        <div className="md-4 pl-1 pr-2 py-2">
        <input
      type="radio"
      id="Car3"
      name="product"
      onChange={changeProduct}
      value={car3}
      required
      className="hidden peer w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />
    <label htmlFor="Car3" className="inline-flex items-center justify-between w-48 p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-300 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="block">
            <div className="w-1/12 text-sm font-semibold">Itasha</div>
            <div className="text-xs">aa</div>
            <div className="text-xs">aa</div>
        </div>
      <Image src={Car3} alt="Car3"  className="flex w-1/4 h-auto"/></label>
    </div>

    <div className="md-4 pr-1 pl-2 py-2">
        
        <input
      type="radio"
      id="Car4"
      name="product"
      onChange={changeProduct}
      value={car4}
      required
      className="hidden peer w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />
    <label htmlFor="Car4" className="inline-flex items-center justify-between w-48 p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-300 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="block">
            <div className="w-1/12 text-sm font-semibold">Van</div>
            <div className="text-xs">aa</div>
            <div className="text-xs">aa</div>
        </div>
      <Image src={Car4} alt="Car4"  className="flex w-1/4 h-auto"/></label>
    </div>

</div>
    <div className="flex ">



    <div className="md-4 pl-1 pr-2 py-2">
        
        <input
      type="radio"
      id="Car5"
      name="product"
      onChange={changeProduct}
      value={car5}
      required
      className="hidden peer w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />
    <label htmlFor="Car5" className="inline-flex items-center justify-between w-48 p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-300 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="block">
            <div className="w-1/12 text-sm font-semibold">Convertible</div>
            <div className="text-xs">aa</div>
            <div className="text-xs">aa</div>
        </div>
      <Image src={Car5} alt="Car5"  className="flex w-1/4 h-auto"/></label>
    </div>

       <div className="md-4 pr-1 pl-2 py-2">
        
            <input
          type="radio"
          id="Car6"
          name="product"
          onChange={changeProduct}
          value={car6}
          required
          className="hidden peer w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50" />
        <label htmlFor="Car6" className="inline-flex items-center justify-between w-48 p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-300 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="block">
                <div className="w-1/12 text-sm font-semibold">Truck</div>
                <div className="text-xs">aa</div>
                <div className="text-xs">aa</div>
            </div>
          <Image src={Car6} alt="Car6"  className="flex w-1/4 h-auto"/></label>
        </div>

</div>
<br />
<br />

        <div className="mb-2">
                 <select
                        required
                        className='w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50'>
                    <option>{StartShop}</option>

                </select>
            </div>
            <div className="mb-8">
                            <select
                    name="remark"
                    onChange={(e) =>
                        setRemark(e.target.value)}
                        required
                        className='w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50'>
                    
                    <option value="" hidden>返却店舗を選択してください</option>
                    <option value="返却は新宿本店">新宿本店</option>
                    <option value="返却は浦和支店">浦和支店</option>
                </select>
            </div>

        <div className="mb-2">
            <input
          type="date" 
          name="start"
          min={jstString}
          onChange={changeStart}
                 className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50"/>
        </div>

        <div className="mb-8">
        <select
                    name="starttime"
                    onChange={(e) =>
                        setStarttime(e.target.value)}
                        required
                        className='w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50'>
                    
                    <option value="" hidden>出発時間を選択してください</option>
                    <option value="T06:00:00+09:00">06:00</option>
                    <option value="T06:30:00+09:00">06:30</option>
                    <option value="T07:00:00+09:00">07:00</option>
                    <option value="T07:30:00+09:00">07:30</option>
                    <option value="T08:00:00+09:00">08:00</option>
                    <option value="T08:30:00+09:00">08:30</option>
                    <option value="T09:00:00+09:00">09:00</option>
                    <option value="T09:30:00+09:00">09:30</option>
                    <option value="T10:00:00+09:00">10:00</option>
                    <option value="T10:30:00+09:00">10:30</option>
                    <option value="T11:00:00+09:00">11:00</option>
                    <option value="T11:30:00+09:00">11:30</option>
                    <option value="T12:00:00+09:00">12:00</option>
                    <option value="T12:30:00+09:00">12:30</option>
                    <option value="T13:00:00+09:00">13:00</option>
                    <option value="T13:30:00+09:00">13:30</option>
                    <option value="T14:00:00+09:00">14:00</option>
                    <option value="T14:30:00+09:00">14:30</option>
                    <option value="T15:00:00+09:00">15:00</option>
                    <option value="T15:30:00+09:00">15:30</option>
                    <option value="T16:00:00+09:00">16:00</option>
                    <option value="T16:30:00+09:00">16:30</option>
                    <option value="T17:00:00+09:00">17:00</option>
                    <option value="T17:30:00+09:00">17:30</option>
                    <option value="T18:00:00+09:00">18:00</option>
                    <option value="T18:30:00+09:00">18:30</option>
                    <option value="T19:00:00+09:00">19:00</option>
                    <option value="T19:30:00+09:00">19:30</option>
                    <option value="T20:00:00+09:00">20:00</option>
                    <option value="T20:30:00+09:00">20:30</option>
                    <option value="T21:00:00+09:00">21:00</option>
                    <option value="T21:30:00+09:00">21:30</option>
                    <option value="T22:00:00+09:00">22:00</option>
                </select>
            </div>

            <div className="mb-2">
            <input
          type="date" 
          name="end"
          min={jstString}
          onChange={changeEnd}
                 className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50"/>
        </div>


        <div className="mb-8">
        <select
                    name="endtime"
                    onChange={(e) =>
                        setEndtime(e.target.value)}
                        required
                        className='w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-yellow-400 placeholder-gray-500 placeholder-opacity-50'>
                    
                    <option value="" hidden>返却時間を選択してください</option>
                    <option value="T06:00:00+09:00">06:00</option>
                    <option value="T06:30:00+09:00">06:30</option>
                    <option value="T07:00:00+09:00">07:00</option>
                    <option value="T07:30:00+09:00">07:30</option>
                    <option value="T08:00:00+09:00">08:00</option>
                    <option value="T08:30:00+09:00">08:30</option>
                    <option value="T09:00:00+09:00">09:00</option>
                    <option value="T09:30:00+09:00">09:30</option>
                    <option value="T10:00:00+09:00">10:00</option>
                    <option value="T10:30:00+09:00">10:30</option>
                    <option value="T11:00:00+09:00">11:00</option>
                    <option value="T11:30:00+09:00">11:30</option>
                    <option value="T12:00:00+09:00">12:00</option>
                    <option value="T12:30:00+09:00">12:30</option>
                    <option value="T13:00:00+09:00">13:00</option>
                    <option value="T13:30:00+09:00">13:30</option>
                    <option value="T14:00:00+09:00">14:00</option>
                    <option value="T14:30:00+09:00">14:30</option>
                    <option value="T15:00:00+09:00">15:00</option>
                    <option value="T15:30:00+09:00">15:30</option>
                    <option value="T16:00:00+09:00">16:00</option>
                    <option value="T16:30:00+09:00">16:30</option>
                    <option value="T17:00:00+09:00">17:00</option>
                    <option value="T17:30:00+09:00">17:30</option>
                    <option value="T18:00:00+09:00">18:00</option>
                    <option value="T18:30:00+09:00">18:30</option>
                    <option value="T19:00:00+09:00">19:00</option>
                    <option value="T19:30:00+09:00">19:30</option>
                    <option value="T20:00:00+09:00">20:00</option>
                    <option value="T20:30:00+09:00">20:30</option>
                    <option value="T21:00:00+09:00">21:00</option>
                    <option value="T21:30:00+09:00">21:30</option>
                    <option value="T22:00:00+09:00">22:00</option>
                </select>
            </div>

            <button
                    type="submit"
                    name="submit"
                    className="flex mx-auto text-white bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-300 rounded text-lg">
                    送信  </button>

        </form>
        <div className="h-screen">
     
    </div>



   
</>
  )
}

