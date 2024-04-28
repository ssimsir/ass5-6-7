import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="" />
				</Link>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
						<li className="nav-item">
							<Link
								to="/home"
								className="nav-link active"
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/checkout"
								className="nav-link active"
								aria-current="page"
							>
								Checkout - ass5
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/clarusBlog"
								className="nav-link"
								aria-current="page"
							>
								Clarus Blog - ass6
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/githubFollowers"
								className="nav-link"
								aria-current="page"
							>
								Github Followers - ass7
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link" aria-current="page">
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
