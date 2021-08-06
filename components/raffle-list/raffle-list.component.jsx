import React from "react";

import RaffleCard from "../raffle-card/raffle-card.component";

const RaffleList = ({ raffles }) => {
  let ongoingRaffles = [];
  let pastRaffles = [];

  // Split raffles up into ongoing and completed
  raffles.forEach((raffle) => {
    raffle.ongoing ? ongoingRaffles.push(raffle) : pastRaffles.push(raffle);
  });

  return (
    <div className="my-4">
      <div className="my-2 py-2">
        <h1 className="underline text-2xl font-semibold">Ongoing Raffles</h1>
        {ongoingRaffles.length > 0 ? (
          ongoingRaffles.map((raffle) => (
            <RaffleCard key={raffle.id} raffle={raffle} />
          ))
        ) : (
          <p className="my-4">
            No raffles currently running, check back next time!
          </p>
        )}
      </div>
      <div className="my-2 py-2">
        <h1 className="underline text-2xl font-semibold">Past raffles</h1>
        {pastRaffles.map((raffle) => (
          <RaffleCard key={raffle.id} raffle={raffle} />
        ))}
      </div>
    </div>
  );
};

export default RaffleList;
