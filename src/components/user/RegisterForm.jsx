import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const RegisterForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [register, setRegister] = useState({});
	const [password, setPassword] = useState(true);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	const confirmPassword = (confirmPassword) => {
		if (confirmPassword === register.password) setPassword(true);
		else setPassword(false);
	};

	const registerSubmit = (e) => {
		e.preventDefault();
		if (password) {
			fetch(`http://localhost:4000/appointmentApp.userData`, {
				method: "POST",
				body: JSON.stringify(register),
				headers: { "Content-Type": "application/json" },
			})
				.then((result) => result.json())
				.then((data) => console.log(data))
				.catch((error) => console.log(error));
			handleCloseModal();
			alert("register successfull");
		} else {
		}
	};
	return (
		<div>
			<Button variant="primary" onClick={handleShowModal}>
				Register
			</Button>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title style={{ color: "red" }}>Register</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={registerSubmit}>
						{!password ? (
							<Form.Label style={{ color: "red", margin: "25px" }}>
								password not confirm
							</Form.Label>
						) : (
							""
						)}
						<Form.Group className="mb-3" controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Enter your Name"
								onChange={(e) =>
									setRegister({
										...register,
										name: e.target.value,
									})
								}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formSurname">
							<Form.Label>Surname</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Enter your Surname"
								onChange={(e) =>
									setRegister({
										...register,
										surname: e.target.value,
									})
								}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formEmail">
							<Form.Label>Email Adress</Form.Label>
							<Form.Control
								required
								type="email"
								placeholder="Enter your Email Adress"
								onChange={(e) =>
									setRegister({
										...register,
										email: e.target.value,
									})
								}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								required
								type="password"
								placeholder="Enter your Password"
								onChange={(e) =>
									setRegister({
										...register,
										password: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group className="mb-5" controlId="formConfirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								required
								type="password"
								placeholder="Enter your Password"
								onChange={(e) => confirmPassword(e.target.value)}
							/>
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
	);
};

export default RegisterForm;
