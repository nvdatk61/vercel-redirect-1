import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oldies Music</title>
        <meta name="description" content="Old music" />
        <link rel="icon" href="/icons8-music-50.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Free Oldies Music
        </h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <Image src="/1.png" height={150} width={250}/>
            <h2>Fleetwood Mac – Go Your Own Way</h2>
            <p>About the Song A Song for the Ages: Unveiling the Timeless Appeal of Fleetwood Mac’s...</p>
          </a>

          <a className={styles.card}>
            <Image src="/2.png" height={150} width={250}/>
            <h2>Boston – “More Than a Feeling</h2>
            <p>About the Song More Than a Feeling: A Journey Through Time With Boston Close your...</p>
          </a>

          <a
            className={styles.card}
          >
            <Image src="/3.png" height={150} width={250}/>
            <h2>John Denver – Leaving On A Jet Plane</h2>
            <p>About The Song Did you know that John Denver’s “Leaving On A Jet Plane” was...</p>
          </a>

          <a
            className={styles.card}
          >
            <Image src="/4.png" height={150} width={250}/>
            <h2>Frankie Valli & The Four Seasons – Sherry</h2>
            <p>
              About The Song Frankie Valli (born Francis Casteluccio) had been hard at work trying to ...
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          By Datnguyenvu
      </footer>
    </div>
  )
}

export default Home

