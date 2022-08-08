import "../styles/css/dashboard.css";
import IconButton from "@material-ui/core/IconButton";
import MaterialUISwitch from "../components/MaterialUISwitch";
import Searchbar from "../components/Searchbar";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import image from "../styles/img/logo.png";

const Header = () => {
	return (
		<>
			<div className="header">
				<img
					style={{
						cursor: "pointer",
						marginLeft: "3%",
						marginTop: "1%",
						height: "8%",
						width: "8%",
					}}
					src={image}
					alt="logo"
				/>
				<div style={{ marginTop: "2.3%" }}>
					<Searchbar />
				</div>
				<div className="dashboard__utils" style={{ marginTop: "2%" }}>
					<MaterialUISwitch />
					<IconButton>
						<AiOutlineSetting />
					</IconButton>
					<IconButton>
						<BsFillBellFill />
					</IconButton>
				</div>
			</div>
		</>
	);
};

export default Header;
