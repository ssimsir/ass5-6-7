import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Container from "react-bootstrap/Container";
import { Pagination } from "react-bootstrap";

const Blog = ({ dataState, setDataState }) => {
	const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa numarası
	const itemsPerPage = 10; // Her sayfada gösterilecek öğe sayısı

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		// İlgili sayfaya göre veri almak için buraya API çağrısı yapılabilir veya başka bir işlem gerçekleştirilebilir.
	};

	return (
		<div>
			<Container
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					gap: "1.5rem",
				}}
			>
				{dataState
					.filter(
						(element) =>
							element.id > itemsPerPage * (currentPage - 1) &&
							element.id <= itemsPerPage * currentPage
					)
					.map((element) => (
						<div key={element.id}>
							<BlogCard
								id={element.id}
								title={element.title}
								body={element.body}
								setDataState={setDataState}
								dataState={dataState}
							/>
						</div>
					))}
			</Container>
			<Pagination className="mt-5 d-flex justify-content-center">
				<Pagination.First onClick={() => handlePageChange(1)} />
				<Pagination.Prev
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				/>
				{[...Array(Math.ceil(dataState.length / itemsPerPage)).keys()].map(
					(number) => (
						<Pagination.Item
							key={number + 1}
							active={number + 1 === currentPage}
							onClick={() => handlePageChange(number + 1)}
						>
							{number + 1}
						</Pagination.Item>
					)
				)}
				<Pagination.Next
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={
						currentPage === Math.ceil(dataState.length / itemsPerPage)
					}
				/>
				<Pagination.Last
					onClick={() =>
						handlePageChange(Math.ceil(dataState.length / itemsPerPage))
					}
				/>
			</Pagination>
		</div>
	);

	//  return (

	// )
};

export default Blog;
