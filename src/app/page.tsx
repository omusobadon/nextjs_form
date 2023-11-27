import React from 'react'
import Link from 'next/link'
import { GetOrder } from './api';


export default async function Home() {

   const log = await GetOrder();
  console.log(log);
  

  return (
    <div>
  
        

    </div>
  )
}






