import React from "react";

import Link from "next/link";

const Header = ({}) => {
  return (
    <header className="text-3xl font-bold">
      <h1>
        <Link href="/">
          <a>MENU Skateshop Raffles</a>
        </Link>
      </h1>
      {/* Add an if authenticated -> render 'sign out' and 'new raffle' buttons */}
    </header>
  );
};

export default Header;
