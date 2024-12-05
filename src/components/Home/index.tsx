import styles from "./styles.module.css";

const Home = () => {
	return (
		<section id="home" className={styles.home}>
			<div className={styles.container}>
				<h1 className={`${styles.title} ${styles.slideIn}`}>
					Olá, sou <span className={styles.highlight}>Filipe</span>!
				</h1>
				<p className={`${styles.subtitle} ${styles.slideIn}`}>
					Desenvolvedor backend com experiência em frontend, mobile e mais.
				</p>
				<div className={styles.buttons}>
					<a href="#projects" className={`${styles.btn} ${styles.btn_primary}`}>
						Veja Meus Projetos
					</a>
					<a
						href="https://www.linkedin.com/in/mrffilipe"
						className={`${styles.btn} ${styles.btn_secondary}`}
						target="_blank"
						rel="noreferrer"
					>
						Entre em Contato
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
