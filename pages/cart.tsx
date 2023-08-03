import CartTotal from '../src/components/CartTotal'
import CartTable from '../src/components/CartTable'
import Header from '../src/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'reactstrap'

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name='description' content='Meu carrinho de compras' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </Head>

      <Header />

      <main>
        <Container className='mb-5'>
          <h1 className='my-5'>
            Carrinho
          </h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>
    </>
  )
}

export default Cart