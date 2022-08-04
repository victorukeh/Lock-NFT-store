import "../styles/css/menuitem.css";
const MenuItem = ({ text, icon, tag, number }) => {
	return (
		<>
			<div className="menu__item">
				<div className="menu__item__icon">{icon}</div>

				<p>{text}</p>
				{tag && <div className="menu__item__tag">{tag}</div>}
				{number && <div className="menu__item__number">{number}</div>}
			</div>
		</>
	);
};

export default MenuItem;
