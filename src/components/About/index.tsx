import styles from "./styles.module.css";

const About = () => {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.container}>
				<div className={styles.image}>
					{/* Substitua a URL abaixo pela sua imagem */}
					<img
						src="https://via.placeholder.com/150"
						alt="Filipe"
						draggable={false}
					/>
				</div>
				<div className={styles.content}>
					<h2 className={styles.title}>Sobre Mim</h2>
					<p className={styles.text}>
						Me chamo Filipe, desenvolvedor backend com experiência em frontend,
						mobile e muito mais! Sou apaixonado por engenharia de software, e
						estou sempre buscando evoluir minhas habilidades e conhecimentos.
					</p>
					<p className={styles.text}>
						Atualmente, estou focado em{" "}
						<span className={styles.highlight}>C#</span>,{" "}
						<span className={styles.highlight}>TypeScript</span>,{" "}
						<span className={styles.highlight}>React</span>, e desenvolvimento
						mobile usando <span className={styles.highlight}>Flutter</span>,{" "}
						<span className={styles.highlight}>React Native</span>, e{" "}
						<span className={styles.highlight}>Kotlin Multiplatform</span>.
					</p>
					<div className={styles.future_goals}>
						<h3 className={styles.subtitle}>Objetivos Futuros</h3>
						<p className={styles.text}>
							Planejo me especializar ainda mais com uma{" "}
							<span className={styles.highlight}>
								pós-graduação em Arquitetura de Software
							</span>{" "}
							e explorar novas tecnologias que possam revolucionar a forma como
							desenvolvemos software.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
