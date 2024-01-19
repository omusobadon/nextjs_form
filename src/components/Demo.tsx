import { StockGet } from '@/types';
import React from 'react';



interface DemoProps{
    stocks:StockGet[];
}

const Demo = ({stocks}: DemoProps) => {
  return (
    <>
    <div>
        {stocks.map((stock)  => (         
        <div key={stock.id}>

            <div>{stock.qty}</div>
        </div>
 ))}
 </div>
    </>   
  )
}

export default Demo