import "../styles/css/sidebar.css";
import UserHeader from "../components/UserHeader";
import Balance from "../components/Balance"
import Menu from "../components/Menu"

const SideBar = () => {
	return (
		<>
			<div className="sidebar">
				<UserHeader />
				<Balance/>
				<Menu/>
			</div>
		</>
	);
};

export default SideBar;
