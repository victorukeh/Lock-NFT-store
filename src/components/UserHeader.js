import React from "react";
import "../styles/css/userHeader.css";
import { Avatar } from "@mui/material";
import { VscAdd } from "react-icons/vsc";
import { IconContext } from "react-icons";

import IconButton from "@material-ui/core/IconButton";
import avater from "../styles/img/149071.png";

export const UserHeader = () => {
	return (
		<>
			<div className="user__header">
				<IconButton className="user__header__sub__1">
					<Avatar
						className="user__header__avater"
						alt="Cindy Baker"
						src={avater}
						style={{ height: '50px', width: '50px' }}
					/>
				</IconButton>
				<div className="user__header__sub__2">
					<div className="user__header__content">
						<p className="user__header__content__text">Ukehsada11</p>
						<div className="user__header__content__sub">
							<p className="user__header__content__sub__text">
								premium{" "}
								<span className="user__header__content__sub__text orange">
									Pro +
								</span>
							</p>
						</div>
					</div>
				</div>
				<IconContext.Provider value={{ className: "user__header__sub__3" }}>
					<VscAdd />
				</IconContext.Provider>
			</div>
		</>
	);
};

export default UserHeader;
