import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Header from '../../components/Head';
import MapImage from '../../../public/img/関東地方(都道府県).png';
export default function shop () {

    return (

    <>
    <Header />
        <p> </p>

        <Image src={MapImage} alt="地図"></Image>

        <Link href={'shop/Tokyo/Shinjuku'}>
        新宿本店
        </Link>


        <Link href={'shop/Tokyo/Ikebukuro'}>
        池袋支店
        </Link>


        <Link href={'shop/Tokyo/Akihabara'}>
        秋葉原支店
        </Link>


        <Link href={'shop/Saitama/Omiya'}>
        大宮支店 
        </Link>


        <Link href={'shop/Saitama/Urawa'}>
        浦和支店
        </Link>


        <Link href={'shop/Saitama/Shiraoka'}>
        白岡支店
        </Link>


        <Link href={'shop/Saitama/Gyouda'}>
        行田支店
        </Link>


        <Link href={'shop/Chiba'}>
        千葉支店
        </Link>
    </>

    )
}