import { Button, Form } from "react-bootstrap";

const CheckoutPage = () => {
	return (
		<>
			<Form style={{width:"100%"}}>
				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Product Name</Form.Label>
					<Form.Control required type="text" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formSurname">
					<Form.Label>Product Price</Form.Label>
					<Form.Control required type="number" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formEmail">
					<Form.Label>Product Quantity</Form.Label>
					<Form.Control required type="number" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPassword">
					<Form.Label>Product Image</Form.Label>
					<Form.Control required type="url" />
				</Form.Group>

				<Form.Group className="d-flex justify-content-center">
					<Button type="submit" variant="success">
						Add To Cart
					</Button>
				</Form.Group>
			</Form>
		</>
	);
};

export default CheckoutPage;
