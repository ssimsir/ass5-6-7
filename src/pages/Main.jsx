import LoginForm from "../components/user/LoginForm";
import RegisterForm from "../components/user/RegisterForm";

const main = () => {
	return (
		<div>
			<div className="mainClass">
				<LoginForm />
				<RegisterForm />
				<div>
					<p>mail : admin@admin.com</p>
					<p>şifre : 1234</p>
				</div>
			</div>
		</div>
	);
};

export default main;
