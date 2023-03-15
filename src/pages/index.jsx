import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { loadPosts } from './api/hello'





export default function Home({ users }) {

  return (
    <>
      <Head>
        <title>Lista de usuarios</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href='agregar' className={styles.button}>
          Agregar a la lista
        </Link>
        <ul className={styles.grid}>
          {users.map(user => (
            <li key={user.id} className={styles.card}>
              <p>ID: {user.id}</p>
              <p>Resultado: {user.operacion}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}


export async function getStaticProps() {
  const users = await loadPosts()

  return { props: { users } }

}