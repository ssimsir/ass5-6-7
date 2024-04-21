import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = ({ dataState, setDataState }) => {
	return (
		<Container>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					></Nav>
					<Form className="d-flex ">
						<Nav.Item className="mx-4">
							<p>
								<span className="mx-2">Posts</span>
								<span
									style={{
										backgroundColor: "darkcyan",
										color: "white",
										borderRadius: "50%",
										padding: "0 7px",
									}}
									className=""
								>
									{dataState.length}
								</span>
							</p>
						</Nav.Item>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default MyNavbar;
