import React from "react";

import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full lg:w-3/5 mx-auto p-4 px-8">
			<Head>
				<title>Menu Skateshop Raffles</title>
			</Head>
      {children}
    </div>
  );
};

export default Layout;
