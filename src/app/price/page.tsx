import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import London from '../../../public/img/london.png'
import Header  from '../../components/Head';
import Price from '../../../public/img/料金構造.png';

export default function () {




    return (

        <>
      
      <Header/>
                <h1>料金の計算方法</h1>

                <p>
                    オムそばレンタカーでは、
                </p>
        <Image src={Price} alt=''>
        </Image>
        
      
        </>




    )
}