import React from 'react';
import Order from '../../components/Order';
import Header from '../../components/Head';
import Footer from '../../components/Foot';
import { GetStock } from '@/api';
import Demo from '@/components/Demo';

export default async function Home () {

  const stocks = await GetStock();
  console.log(stocks);
  
  return (
    <>
<Demo stocks={stocks}/>
    </>
  )
}

