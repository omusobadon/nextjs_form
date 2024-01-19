"use client"
import React from 'react';
import Header from '../../components/Head';
import Image from "next/image";
import Car1 from "../../../public/img/Car1.png";
import Car2 from "../../../public/img/Car2.png";
import Car3 from "../../../public/img/Car3.png";
import Car4 from "../../../public/img/Car4.png";
import Car5 from "../../../public/img/Car5.png";
import Car6 from "../../../public/img/Car6.png";
import Footer from '@/components/Foot';
export default  function Home () {

  return (
    <>
<Header/>    
    <section className
    ="text-gray-600 body-font">
  <div className
  ="container px-5 py-24 mx-auto">
    <div className
    ="flex flex-col text-center w-full mb-20">
      <h1 className
      ="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Rental Car</h1>
      <p className
      ="lg:w-2/3 mx-auto leading-relaxed text-base">2024年1月現在 取り扱っている車の一覧です。</p>
    </div>
    <div className
    ="flex flex-wrap -m-9">
      <div className
      ="p-4 lg:w-1/2">
        <div className
        ="  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                   <Image src={Car1} alt="Car1"className
          ="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div className
          ="flex-grow sm:pl-8">
            <h2 className
            ="title-font font-medium text-lg text-gray-900">Buggy</h2>
            <h3 className
            ="text-gray-500 mb-3">UI Developer</h3>
            <p className
            ="mb-4">DIY tote </p>
            <span className
            ="inline-flex">
              <a className
              ="text-gray-500">
              </a>
            </span>
          </div>
        </div>
      </div> <div className
      ="p-4 lg:w-1/2">
        <div className
        ="  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                   <Image src={Car2} alt="Car2"className
          ="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div className
          ="flex-grow sm:pl-8">
            <h2 className
            ="title-font font-medium text-lg text-gray-900">Motorcycle</h2>
            <h3 className
            ="text-gray-500 mb-3">UI Developer</h3>
            <p className
            ="mb-4">DIY tote </p>
            <span className
            ="inline-flex">
              <a className
              ="text-gray-500">
              </a>
            </span>
          </div>
        </div>
      </div> <div className
      ="p-4 lg:w-1/2">
        <div className
        ="  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                   <Image src={Car3} alt="Car3"className
          ="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div className
          ="flex-grow sm:pl-8">
            <h2 className
            ="title-font font-medium text-lg text-gray-900">Itasha</h2>
            <h3 className
            ="text-gray-500 mb-3">UI Developer</h3>
            <p className
            ="mb-4">DIY tote </p>
            <span className
            ="inline-flex">
              <a className
              ="text-gray-500">
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className
      ="p-4 lg:w-1/2">
        <div className
        ="  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image src={Car4} alt="Car4"className
          ="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div className
          ="flex-grow sm:pl-8">
            <h2 className
            ="title-font font-medium text-lg text-gray-900">Van</h2>
            <h3 className
            ="text-gray-500 mb-3">Designer</h3>
            <p className
            ="mb-4">DIY tote </p>
            <span className
            ="inline-flex">
              <a className
              ="text-gray-500">
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className
      ="p-4 lg:w-1/2">
        <div className
        ="  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image src={Car5} alt="Car5"className
          ="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div className
          ="flex-grow sm:pl-8">
            <h2 className
            ="title-font font-medium text-lg text-gray-900">Convertible</h2>
            <h3 className
            ="text-gray-500 mb-3">UI Developer</h3>
            <p className
            ="mb-4">DIY tote </p>
            <span className
            ="inline-flex">
              <a className
              ="text-gray-500">    
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className
      ="p-4 lg:w-1/2">
        <div className
        ="  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image src={Car6} alt="Car6"className
          ="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div className
          ="flex-grow sm:pl-8">
            <h2 className
            ="title-font font-medium text-lg text-gray-900">Truck</h2>
            <h3 className
            ="text-gray-500 mb-3">Designer</h3>
            <p className
            ="mb-4">DIY tote </p>
            <span className
            ="inline-flex">
              <a className
              ="text-gray-500">
           </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>     
<Footer/>
    </>
  )
}



