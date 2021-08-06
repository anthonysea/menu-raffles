import React from "react";
import Image from "next/image";
import Link from "next/link";

import { dateToString } from "../../utils/date.utils";

import styles from "./raffle-card.module.css";

const RaffleCard = ({ raffle }) => {
  const sizeDisplay = raffle.sizeRun.map((size, ind) => (
    <span key={ind} className={styles.sizeIcon}>{size}</span>
  ));

  return (
    <div className={styles.raffleCard}>
      <div className="flex ">
        <div>
          <Image src="http://picsum.photos/200" width={150} height={150} />
        </div>
        <div className="flex flex-row justify-between flex-grow">
          <div className="flex flex-col px-4 flex-none">
            <h1 className="text-lg font-bold">{raffle.name}</h1>
            <h2 className="underline mt-2">Sizes</h2>
            <p>{sizeDisplay}</p>
            <h2 className="underline mt-2">Deadline</h2>
            <p>{dateToString(raffle.endDate)}</p>
          </div>
          {raffle.ongoing ? (
            <div className="flex flex-col justify-end my-4">
              <Link
                href={`/raffles/${raffle.id}/entry-form`}
              >
                <a className={styles.enterRaffleBtn}>Enter Raffle</a>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RaffleCard;
