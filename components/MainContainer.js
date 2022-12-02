import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from 'next/head'
import styles from '../styles/MainContainer.module.css'

export default function MainContainer({children}) {
    return (<>
        <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800&display=optional" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/703a71aaa4.js" crossorigin="anonymous" async/>

        </Head>
        <Navbar />
        <div className={`${styles.container} mt-4`} onload="onLoad()">{children}</div>
        <Footer />
    </>)
}