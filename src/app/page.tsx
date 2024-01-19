import React from "react";
import { GetStock } from "@/api";
import Order from "@/components/Order";
import Header from "@/components/Head";
import Footer from "@/components/Foot";
import Image from "next/image";
import Welcome from "../../public/img/header.png";

export default function Home() {

  return (
    <>
      <Header />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-full w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
        <Image src={Welcome} alt="Header" className="w-full h-auto  rounded-full"/>
        </div>
      </div>

      <div className="md:pt-8">

        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Welcome</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          オムそばどん予約システムのでも画面になります。<br />

<a href="/shop" className="text-yellow-400 underline transition duration-100 hover:text-yellow-300 active:text-yellow-400 ">店舗一覧</a>から予約を開始したい店舗を検索してください。</p><br /><br />

        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-2xl md:mb-6 md:text-left">What is a Omusobadon Reservation System?</h2>

        <div className="mb-6 text-gray-500 sm:text-lg md:mb-8">容易に予約処理を実装できるオープンソースを前提として開発した予約システムのこと。具体的には、ユーザが直感的に使用でき、かつ必要に応じて機能拡張やカスタマイズが可能な予約システムの基盤を構築している。これにより、レンタル業界全体の効率化と、エンドユーザーの利便性を向上させることが可能となる。<p>※ユーザとは開発者のことです。</p></div>
      </div>
    </div>
  </div>
</div>
      <Footer/>
    </>
  );
}
