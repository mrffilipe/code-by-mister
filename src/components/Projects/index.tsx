import styles from "./styles.module.css";

import Separator from "../Separator";

const projects = [
	{
		id: 1,
		title: "MesaFlix",
		description:
			"Um SaaS para cardápios de estabelecimentos, com pedidos por QR Code e gestão integrada.",
		technologies: ["React", "Firebase", "TypeScript"],
		repository: "https://github.com/seu-perfil/mesaflix",
		demo: "https://mesaflix.app",
	},
	{
		id: 2,
		title: "Simulador de Fazenda",
		description:
			"Jogo de simulação de fazenda com gráficos realistas e áreas personalizáveis.",
		technologies: ["Unity 3D", "C#", "Blender"],
		repository: "https://github.com/seu-perfil/farm-simulator",
		demo: "https://farmsim.demo",
	},
	{
		id: 3,
		title: "Simulador de Fazenda",
		description:
			"Jogo de simulação de fazenda com gráficos realistas e áreas personalizáveis.",
		technologies: ["Unity 3D", "C#", "Blender"],
		repository: "https://github.com/seu-perfil/farm-simulator",
		demo: "https://farmsim.demo",
	},
	{
		id: 4,
		title: "Simulador de Fazenda",
		description:
			"Jogo de simulação de fazenda com gráficos realistas e áreas personalizáveis.",
		technologies: ["Unity 3D", "C#", "Blender"],
		repository: "https://github.com/seu-perfil/farm-simulator",
		demo: "https://farmsim.demo",
	},
	{
		id: 5,
		title: "Simulador de Fazenda",
		description:
			"Jogo de simulação de fazenda com gráficos realistas e áreas personalizáveis.",
		technologies: ["Unity 3D", "C#", "Blender"],
		repository: "https://github.com/seu-perfil/farm-simulator",
		demo: "https://farmsim.demo",
	},
];

const Projects = () => {
	const projectList = projects.map((project) => (
		<div key={project.id} className={styles.card}>
			<div className={styles.image}>
				<img
					src="https://via.placeholder.com/200x180"
					alt="Filipe"
					draggable={false}
				/>
			</div>
			<div className={styles.content}>
				<h3 className={styles.card_title}>{project.title}</h3>
				<p className={styles.card_description}>{project.description}</p>
				<div className={styles.tags}>
					{project.technologies.map((tech, idx) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<span key={idx} className={styles.tag}>
							{tech}
						</span>
					))}
				</div>
				<div className={styles.links}>
					<a
						href={project.repository}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						Repositório
					</a>
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							Demo
						</a>
					)}
				</div>
			</div>
		</div>
	));

	return (
		<>
			<section id="projects" className={styles.projects}>
				<div className={styles.container}>
					<h2 className={styles.title}>Projetos</h2>
					<div className={styles.grid}>{projectList}</div>
				</div>
			</section>
			<Separator />
		</>
	);
};

export default Projects;
