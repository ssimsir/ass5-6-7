import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../assets/loading.gif";
import { AuthContext } from "../../context/AuthProvider";

const LoginForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [login, setLogin] = useState({});
	const [loading, setLoading] = useState(false);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	const [user, setUser] = useState({ email: "", password: "" });

	const {loginContext} = useContext(AuthContext)

	const navigate = useNavigate();

	const loginSubmit = (e) => {
		e.preventDefault();
		setLoading(false);
		fetch(
			`https://mock-server-cdkz.onrender.com/appointmentApp.userData?email=${user.email}&password=${user.password}`
		)
			.then((result) => result.json())
			.then((data) => {
				if (data[0]) {
					
					loginContext(data[0])
					console.log(data[0]);
					setLoading(true);
					
					setTimeout(() => {
						setLogin(data[0]);
						navigate("/home");
					}, 3000);
				} else {
					setLogin(false);
				}
			})
			.catch((error) => console.log(error));
	};
	
	return (
		<div>
			{loading ? (
				<div
					style={{
						width: "100vw",
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						style={{ width: "250px", height: "250px" }}
						src={loadingGif}
						alt=""
					/>
				</div>
			) : (
				<div>
					<Button variant="primary" onClick={handleShowModal}>
						Login
					</Button>
					<Modal show={showModal} onHide={handleCloseModal}>
						<Modal.Header closeButton>
							<Modal.Title style={{ color: "red" }}>Login</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form onSubmit={loginSubmit}>
								{login ? (
									""
								) : (
									<Form.Label style={{ color: "red", margin: "25px" }}>
										Email veya şifre hatalı
									</Form.Label>
								)}
								<Form.Group className="mb-3" controlId="formName">
									<Form.Label>Email Adress</Form.Label>
									<Form.Control
										required
										type="email"
										placeholder="Enter your Email Adress"
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid Name.
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-5" controlId="formPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										required
										type="password"
										placeholder="Enter your Password"
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid Name.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group className="d-flex justify-content-center">
									<Button type="submit" variant="primary">
										Submit
									</Button>
									<Button variant="danger" onClick={handleCloseModal}>
										Close
									</Button>
								</Form.Group>
							</Form>
						</Modal.Body>
					</Modal>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
