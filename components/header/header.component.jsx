import React from "react";

import Link from "next/link";

import { useAuth } from "../../hooks/use-auth";

const Header = ({}) => {
  const auth = useAuth();

  return (
    <header className="flex flex-row justify-between">
      <h1 className="text-3xl font-bold">
        <Link href="/">
          <a>MENU Skateshop Raffles</a>
        </Link>
      </h1>
      {/* Add an if authenticated -> render 'sign out' and 'new raffle' buttons */}
      {auth.user ? (
        <button onClick={() => auth.signout()} value="Sign Out">Sign Out</button>
      ) : null}
    </header>
  );
};

export default Header;
