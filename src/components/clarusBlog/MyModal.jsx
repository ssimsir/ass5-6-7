import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MyModal({header, body}) {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);


	return (
		<div>
			<Button variant="secondary" onClick={handleShowModal}>
				See Detail
			</Button>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>
               {header}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{body}
				</Modal.Body>
				<Modal.Footer>

					<Button variant="secondary" onClick={handleCloseModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default MyModal;
