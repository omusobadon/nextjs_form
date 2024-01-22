import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Shop1 from "../../../public/img/Shop1.png";
import Shop2 from "../../../public/img/Shop2.png";
import Header from '@/components/Head';
import Footer from '@/components/Foot';

export default function shop () {

    return (

    <>
<Header/>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        
        
    <div className="sm:w-1/2 mb-10 px-4">
    <div className="rounded-lg w-6/12 h-auto overflow-hidden">
    <Link href={'shop/Shinjuku'}>
    <Image src={Shop1} alt="Shop1" className="object-cover object-center h-full w-full"/>
    新宿本店
    </Link>
    </div>
    </div>

    <div className="sm:w-1/2 mb-10 px-4">
    <div className="rounded-lg w-6/12 h-auto overflow-hidden">
    <Link href={'shop/Urawa'}>
    <Image src={Shop2} alt="Shop1" className="object-cover object-center h-full w-full"/>
    浦和支店
    </Link>
    </div>
    </div>

    </div>
  </div>
</section>
<Footer/>
    </>

    )
}