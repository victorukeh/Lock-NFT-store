import MenuItem from "./MenuItem";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/css/menu.css";
const Menu = () => {
	return (
		<>
			<div className="menu">
				<Link to="/" className="menu__link">
					<MenuItem icon={<AiFillAliwangwang />} text="Dashboard" />
				</Link>
				<Link to="/invoices" className="menu__link">
					<MenuItem icon={<AiFillShop />} text="Market" tag="PRO" />
				</Link>
				<Link to="/invoices" className="menu__link">
					<MenuItem icon={<BiDollar />} text="Active Bids" number="+3" />
				</Link>
			</div>
		</>
	);
};

export default Menu;
