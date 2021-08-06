import React from 'react';

const Layout = ({ children }) => {

	return (
		<div className="flex flex-col w-full lg:w-3/5 mx-auto p-4 px-8">
			{ children }
		</div>
	)
}

export default Layout;