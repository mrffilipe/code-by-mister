import styles from "./styles.module.css";

import ProfilePicture from "../../assets/img/profile_picture.jpg";

const About = () => {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.container}>
				<div className={styles.image}>
					<img src={ProfilePicture} alt="Filipe" draggable={false} />
				</div>
				<div className={styles.content}>
					<h2 className={styles.title}>Sobre Mim</h2>
					<p className={styles.text}>
						Olá! Meu nome é Filipe, sou um desenvolvedor backend apaixonado por
						tecnologia. Minha jornada começou em 2015, quando dei meus primeiros
						passos na programação de forma autodidata, explorando linguagens
						como <span className={styles.highlight}>C#</span> e ferramentas como{" "}
						<span className={styles.highlight}>Unity3D</span>. Desde então,
						construí uma base sólida em{" "}
						<span className={styles.highlight}>engenharia de software</span>,
						com experiência em{" "}
						<span className={styles.highlight}>frontend</span>,{" "}
						<span className={styles.highlight}>mobile</span>, e muito mais.
					</p>
					<p className={styles.text}>
						Atualmente, meu foco está em dominar tecnologias como{" "}
						<span className={styles.highlight}>C#</span>,{" "}
						<span className={styles.highlight}>TypeScript</span>, e{" "}
						<span className={styles.highlight}>React</span>, além de atuar com
						desenvolvimento mobile utilizando{" "}
						<span className={styles.highlight}>Flutter</span>,{" "}
						<span className={styles.highlight}>React Native</span>, e{" "}
						<span className={styles.highlight}>Kotlin Multiplatform</span>. Meu
						objetivo é transformar ideias em soluções inovadoras e robustas.
					</p>
					<div className={styles.future_goals}>
						<h3 className={styles.subtitle}>Objetivos Futuros</h3>
						<p className={styles.text}>
							Estou comprometido em aprofundar meus conhecimentos com uma{" "}
							<span className={styles.highlight}>
								pós-graduação em Arquitetura de Software
							</span>
							. Além disso, quero continuar explorando tecnologias emergentes
							que possam transformar a forma como desenvolvemos software e
							criamos experiências digitais impactantes.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
