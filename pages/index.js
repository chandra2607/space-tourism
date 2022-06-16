import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../Components/HomePage'
import styles from '../styles/Home.module.css'

export default function Home() {

  
  return (
    <div >
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet" />
      </Head>
    <HomePage />
    </div>
  )
}
