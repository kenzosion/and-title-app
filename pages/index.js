import Head from 'next/head'
import styles from '../styles/Home.module.css'
import List from '../components/List'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ANDis title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='app'>
        <List />
      </div>
    </div>
  )
}
