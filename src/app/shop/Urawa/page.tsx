"use client"
import React from 'react';
import Header from "@/components/Head";
import Text from "@/components/ShopText";
import Footer from "@/components/Foot";



export default function Saitama() {

 
  return (
    <>
         <Header />
         <Text 
          Map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4706.810739534077!2d139.64223138196098!3d35.861999515600715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1d40392f437%3A0x2ecb55398cf67a72!2z44GV44GE44Gf44G-5biC5b255omA!5e0!3m2!1sja!2sjp!4v1705555047685!5m2!1sja!2sjp" 
          Address="Saitama Urawa"
          Email="urawa" 
          StockShop={1}
          StartShop="浦和支店"
           />

         <Footer/>
    </>




    )
  }