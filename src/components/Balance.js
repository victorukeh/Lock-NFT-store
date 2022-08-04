import IconButton from "@material-ui/core/IconButton";
import { VscAdd } from "react-icons/vsc";
import { FaGreaterThan } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "../styles/css/balance.css";
const Balance = () => {
	const useStyles = makeStyles((theme) => ({
		avatar: {
			backgroundColor: "#03fc8c",
			color: "white",
		},
	}));

	function EmailAvatar() {
		const classes = useStyles();
		return (
			<Avatar className={classes.avatar} style={{ height: '25px', width: '25px', }}>
				<VscAdd />
			</Avatar>
		);
	}
	return (
		<>
			<div className="card animated wobble">
				{/* <div className="card__content"> */}
					<p className="card__header"> Your Balance </p>
					<h1 className="card__amount">2,401.02</h1>
					<div className="card__graph"></div>
					<div className="card__topup">
						<EmailAvatar />

						<p className="card__button__text">Top Up Balance</p>
						<FaGreaterThan className="card__greater__than"/>
					</div>
                    <br></br>
				{/* </div> */}
				{/* <div className="card__connect">
					<a className="card__link" href=""> Connect Wallet</a>
				</div> */}
			</div>
		</>
	);
};

export default Balance;
