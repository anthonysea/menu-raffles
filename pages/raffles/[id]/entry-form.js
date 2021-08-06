import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../../components/header/header.component";
import Layout from '../../../components/layout/layout.component';
import RaffleCard from "../../../components/raffle-card/raffle-card.component";
import EntryForm from "../../../components/entry-form/entry-form.component";

import { getAllRaffleIds, getRaffle } from "../../../utils/serializer.utils";

const RaffleEntryPage = ({ raffle }) => {
	console.log("raffle page data: ", raffle)

	return (
		<div>
			<Head>
				<title>MENU Skateshop Raffles - {raffle.name} Raffle</title>
			</Head>
			<Layout>
				<Header/>
				<RaffleCard raffle={raffle}/>
				<EntryForm raffle={raffle}/>
			</Layout>
		</div>
	)
}

export const getStaticProps = async ({ params }) => {
	const raffle = await getRaffle(params.id);

	return {
		props: {
			raffle	
		}
	}
};

export const getStaticPaths = async () => {
	const raffleIds = await getAllRaffleIds();

	console.log("raffleIds: ", raffleIds);

	return {
		paths: raffleIds,
		fallback: false,
	}
};


export default RaffleEntryPage;