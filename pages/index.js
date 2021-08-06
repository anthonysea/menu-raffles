import Head from 'next/head'

import Header from '../components/header/header.component';
import RaffleList from '../components/raffle-list/raffle-list.component';
import Layout from '../components/layout/layout.component';
import { getAllRaffles } from '../utils/serializer.utils';

export default function Home({ raffles }) {
  return (
    <div>
      <Head>
        <title>MENU Skateshop Raffles</title>
      </Head>
      <Layout>
        <Header/>
        <RaffleList raffles={raffles}/> 
      </Layout>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const raffles = await getAllRaffles();

  return {
    props: {
      raffles: raffles, 
    }
  }
}
