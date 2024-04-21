import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Blog from "../components/clarusBlog/Blog";
import MyNavbar from "../components/clarusBlog/MyNavbar";
import loadingGif from "../assets/loading.gif";

const ClarusBlog = () => {
	const [dataState, setDataState] = useState([]);
	const [loading,setLoading]=useState(true)

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			if (!response.ok) throw new Error("Error");
			const data = await response.json();

			setDataState(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
		setTimeout(()=>{
			setLoading(false)
		}, 2000)
	}, []);

	return (
		<div>
			<>
				<NavBar />
				<MyNavbar dataState={dataState} setDataState={setDataState} />
				{loading ? 
				(	<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
					<img style={{width:"350px", height:"350px"}} src={loadingGif} alt="" />
					</div>
				):
				(
					<Blog dataState={dataState} setDataState={setDataState} />
				)  }
			</>
		</div>
	);
};

export default ClarusBlog;
