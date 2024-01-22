import React from 'react'
import Order from './Order'
import { StaticRequire } from 'next/dist/shared/lib/get-img-props'


interface Textprops  {
    Map: string
    Address: string
    Email:string
    StockShop:number
    StartShop:string

}


const Text = ( { Map , Address , Email , StockShop , StartShop } : Textprops) => {
    return (
   <>
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">




    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

      <iframe width="100%" height="100%" className="absolute inset-0"  title="map"   src={Map} ></iframe>
      
      <div className="bg-white relative flex flex-wrap py-6 px-12 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">{Address}</p>
        </div>

        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-yellow-400 leading-relaxed">{Email}@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
        
      </div>
    
    </div>


    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
    <Order StockShop={StockShop} StartShop={StartShop}/>      
     </div>


   </div>
</section>

</>
    )
  }
  
  export default Text