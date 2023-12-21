import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Yeni Yıl Bulmacasına Hoş Geldiniz! Başarılar..." />
        <p className="description">
          Bulmaca gelecek <br> 
          Buraya da bulmaca gelecek
        </p>
      </main>

      <Footer />
    </div>
  )
}
