"use client"
import React from 'react';
import Header from '@/components/Head';
import Text from "@/components/ShopText";
import Footer from '@/components/Foot';

export default function Shinjuku() {

 
  return (
    <>
      <Header/>

          <Text 
          Map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.311911319664!2d139.69851498949737!3d35.69394130189093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd99bfa9a57%3A0xf91eebb5b90ddb36!2z5paw5a6_5Yy65b255omA!5e0!3m2!1sja!2sjp!4v1705555237275!5m2!1sja!2sjp" 
          Address="Tokyo Shinjuku"
          Email="shinjuku"
          StockShop={0}
          StartShop="新宿本店" />

      <Footer/>
    </>




    )
  }