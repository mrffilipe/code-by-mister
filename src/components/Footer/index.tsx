import styles from "./styles.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<h2>Filipe</h2>
				</div>
				<nav className={styles.navigation}>
					<a href="#about" className={styles.link}>
						Sobre Mim
					</a>
					<a href="#projects" className={styles.link}>
						Projetos
					</a>
					<a href="#certificates" className={styles.link}>
						Certificados
					</a>
					<a href="#experience" className={styles.link}>
						Experiência
					</a>
					<a href="#experience" className={styles.link}>
						Blog
					</a>
					<a href="#contact" className={styles.link}>
						Contato
					</a>
				</nav>
				<div className={styles.socials}>
					<a
						href="https://linkedin.com/in/seuperfil"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.social_link}
					>
						LinkedIn
					</a>
					<a
						href="https://instagram.com/seuperfil"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.social_link}
					>
						Instagram
					</a>
					<a href="mailto:seuemail@exemplo.com" className={styles.social_link}>
						Email
					</a>
				</div>
				<div className={styles.copyright}>
					<p>&copy; 2024 Filipe. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
