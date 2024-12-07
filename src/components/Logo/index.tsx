import styles from "./styles.module.css";

import LogoSvg from "../../assets/svg/logo.svg";

const Logo = () => {
	return (
		<div className={styles.logo}>
			<img src={LogoSvg} alt="Code by Mister" />
		</div>
	);
};

export default Logo;
