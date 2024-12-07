import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";

import styles from "./styles.module.css";

import Logo from "../Logo";
import SocialMedia from "../SocialMedia";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);

		if (!isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<button
					className={styles.menu_button}
					type="button"
					onClick={toggleMenu}
				>
					<Menu />
				</button>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className={`${styles.overlay} ${isMenuOpen ? styles.visible : ""}`}
					onClick={toggleMenu}
				/>
				<nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
					<button
						className={styles.close_button}
						type="button"
						onClick={toggleMenu}
					>
						<Close />
					</button>
					<ul className={styles.menu_list}>
						<li>
							<a href="#home">Início</a>
						</li>
						<li>
							<a href="#about">Sobre</a>
						</li>
						<li>
							<a href="#projects">Projetos</a>
						</li>
						<li>
							<a href="#certificates">Certificados</a>
						</li>
						<li>
							<a href="#experience">Experiência</a>
						</li>
						<li>
							<a href="#contact">Contato</a>
						</li>
						<SocialMedia className={styles.social_media} />
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
