import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginate = ({ pages, setCurrentPage }) => {
	const [activePage, setActivePage] = React.useState(1);

	let items = [];
	for (let number = 1; number <= pages; number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === activePage}
				onClick={() => setActivePage(number)}
			>
				{number}
			</Pagination.Item>
		);
	}
	useEffect (() => {
		setCurrentPage(activePage);
	}, [activePage, setCurrentPage]);
	return (
		<div>
			<Pagination className="d-flex justify-content-center mt-4">
				<Pagination.First onClick={() => setActivePage(1)} />
				<Pagination.Prev
					onClick={() => setActivePage(activePage - 1)}
					disabled={activePage === 1}
				/>

				{items}
				<Pagination.Next
					onClick={() => setActivePage(activePage + 1)}
					disabled={activePage === pages}
				/>
				<Pagination.Last onClick={() => setActivePage(pages)} />
			</Pagination>
		</div>
	);
};

export default Paginate;
