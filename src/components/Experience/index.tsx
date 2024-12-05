import styles from "./styles.module.css";

const experiences = [
	{
		company: "TechCorp",
		role: "Desenvolvedor Backend",
		period: "Jan 2022 - Atual",
		description:
			"Desenvolvimento e manutenção de APIs RESTful, integração com sistemas de terceiros e otimização de performance.",
		technologies: ["C#", ".NET Core", "SQL Server", "Azure"],
	},
	{
		company: "Startup XYZ",
		role: "Engenheiro de Software",
		period: "Jul 2020 - Dez 2021",
		description:
			"Desenvolvimento de sistemas web full-stack com foco em escalabilidade e usabilidade.",
		technologies: ["Node.js", "React", "MongoDB", "AWS"],
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
