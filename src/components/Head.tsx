import React from 'react'
import Link from 'next/link'
import styles from './Dase.module.css'
import Image from "next/image";
import HeaderImage from "../../public/img/header.png";


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header_inner}>

        <Link href={'/'} >
        <Image src={HeaderImage} alt="Icon" className={styles.header_logo}/>
        </Link>
        
                <div className={styles.header_navgroup}>
                        <Link href={'/shop'} className={styles.header_navitem}>
                        店舗検索  
                        </Link>

                        <Link href={'/price'} className={styles.header_navitem}>
                        料金と車種 
                        </Link>

                        <Link href={'/'} className={styles.header_navitem}>
                        キャンペーン情報
                        </Link>

                        <Link href={'/'} className={styles.header_navitem}>
                        ご利用方法
                        </Link>              
        
                        <Link href={'/Inquiry'} className={styles.header_navitem}>
                        お問い合わせ
                        </Link>
                </div>
        </div>
        </div>
    
  )
}

export default Header