import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import MyModal from "./MyModal";
import { IoIosCloseCircleOutline } from "react-icons/io";

const BlogCard = ({id, title, body, setDataState, dataState }) => {

	let shortTitle=""
	let shortBody = ""

	shortTitle = title.length > 24 ? title.substring(0,24)+"..." : title
	shortBody = body.length > 100 ? body.substring(0,100)+"..." : body

	return (
		<Container>
			<Card style={{ height: "300px", width: "250px" }}>
				<Card.Header>
					<Card.Title style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
						<p>{shortTitle} 
						</p>
						<IoIosCloseCircleOutline style={{color:"red", fontSize:"2rem", cursor:"pointer"}}  onClick={() => setDataState(dataState.filter(element => element.id !== id))}/>
						
					</Card.Title>
				</Card.Header>
				<Card.Body>{shortBody}</Card.Body>
				<Card.Footer
					style={{
						margin: "auto",
						width: "220px",
						backgroundColor: "inherit",
					}}
					className="mb-3 d-flex justify-content-center"
				>
					<MyModal header={title}  body={body} />
				</Card.Footer>
			</Card>
		</Container>
	);
};
export default BlogCard;
