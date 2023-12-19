import React from 'react'
import Link from 'next/link'

type Textprops = {
    Name: string
    Information: string
    Business: string
}


const Text = ( {Name , Information , Business} : Textprops) => {
    return (
   <>
   
        <h1>オムそばレンタカー {Name}</h1>
        <p>本日は晴天なり</p>
    </>
    )
  }
  
  export default Text