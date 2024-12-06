import styles from "./styles.module.css";

const experiences = [
	{
		company: "Desenvolvedor Backend",
		role: "Freelancer",
		period: "Fev 2021 - Atual",
		description:
			"Como freelancer, aprimorei minhas habilidades em liderança e comunicação, trabalhando com uma ampla gama de tecnologias em projetos diversificados.",
		technologies: [
			"C#",
			".NET Core",
			"TypeScript",
			"React",
			"NextJS",
			"C/C++",
			"MySQL",
			"MongoDB",
			"GIT",
			"Docker",
			"RabbitMQ",
		],
	},
	{
		company: "Desenvolvedor Autodidata",
		role: "Autodidata",
		period: "Abr 2015 - Dez 2020",
		description:
			"Iniciei minha jornada na programação com foco em C# e Unity3D, desenvolvendo jogos e aplicações interativas. Posteriormente, ampliei minha base técnica para o desenvolvimento web, aprendendo HTML, CSS, JavaScript e introduzindo-me ao Node.js.",
		technologies: [
			"C#",
			"Unity3D",
			"HTML",
			"CSS",
			"JavaScript",
			"Node.js",
			"PHP",
		],
	},
];

const Experience = () => {
	const listOfExperiencies = experiences.map((exp, index) => (
		<div
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			key={index}
			className={`${styles.timeline_item} ${
				index % 2 === 0 ? styles.left : styles.right
			}`}
		>
			<div className={styles.marker} />
			<div className={styles.content}>
				<h3 className={styles.company}>{exp.company}</h3>
				<p className={styles.role}>{exp.role}</p>
				<p className={styles.period}>{exp.period}</p>
				<p className={styles.description}>{exp.description}</p>
				<div className={styles.technologies}>
					{exp.technologies.map((tech, idx) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<span key={idx} className={styles.tech}>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	));

	return (
		<section id="experience" className={styles.experience}>
			<div className={styles.container}>
				<h2 className={styles.title}>Experiência Profissional</h2>
				<div className={styles.timeline}>
					<div className={styles.vertical_line} />
					{listOfExperiencies}
				</div>
			</div>
		</section>
	);
};

export default Experience;
