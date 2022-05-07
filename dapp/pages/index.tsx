import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import useDwitter from '../hooks/useDwitter'

const Home: NextPage = () => {
  const router = useRouter()
  const { connect, account } = useDwitter();
  const openSignUp = () => {
    router.push('/signUp');
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create letter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-8 text-6xl font-bold">
          Welcome to
          <span className="text-blue-400"> letter app</span>
        </h1>
        {!account ? <Button label='Connect with Ethereum' onClick={connect} /> :
          <p className='text-red-400 mb-8'>Connected to {account}</p>}
        {account ? <Button label='Sign Up' onClick={openSignUp} /> : null}
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by Ethereum
      </footer>
    </div>
  )
}

export default Home
