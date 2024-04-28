import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const navigate = useNavigate();

	const loginContext = (info) => {
		setUser(info);
		navigate("/");
	};
	return (
		<AuthContext.Provider value={{ user, loginContext }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
