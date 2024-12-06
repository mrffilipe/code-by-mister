import styles from "./styles.module.css";

const certificates = [
	{
		id: 1,
		title: "C# COMPLETO Programação Orientada a Objetos + Projetos",
		issuer: "Udemy",
		date: "Outubro de 2022",
		link: "https://www.udemy.com/certificate/UC-0235e5d5-ca64-41e5-b3a5-44d62b07c068/",
	},
	{
		id: 2,
		title: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
		issuer: "Udemy",
		date: "Outubro de 2024",
		link: "https://www.udemy.com/certificate/UC-0f174565-0d23-42fe-a589-61abdc1d2235/",
	},
	{
		id: 3,
		title: "Rock .NET 5 Entity Framework",
		issuer: "Udemy",
		date: "Outubro de 2022",
		link: "https://www.udemy.com/certificate/UC-3f3a78a0-c003-4fe4-8b2a-b5959a5cffd0/",
	},
	{
		id: 4,
		title: "Asp.Net Core 6 Web API, Segurança com JWT e MS Identity Core",
		issuer: "Udemy",
		date: "Outubro de 2023",
		link: "https://www.udemy.com/certificate/UC-291bb720-92de-49ad-8c5e-5e7b932438fb/",
	},
	{
		id: 5,
		title: "Desenvolvimento de Aplicativos Android usando Kotlin",
		issuer: "Udemy",
		date: "Outubro de 2024",
		link: "https://www.udemy.com/certificate/UC-5bafa045-e5bf-4739-a13f-ca5b5fc31e4e/",
	},
	{
		id: 6,
		title: "Aprenda tudo sobre o Linux! Completo e atualizado v2024!",
		issuer: "Udemy",
		date: "Outubro de 2024",
		link: "https://www.udemy.com/certificate/UC-6627ad18-dd03-45f8-aa9f-9506be40ded8/",
	},
];

const Certificates = () => {
	return (
		<section id="certificates" className={styles.certificates}>
			<div className={styles.container}>
				<h2 className={styles.title}>Certificados</h2>
				<div className={styles.grid}>
					{certificates.map((cert) => (
						<div key={cert.id} className={styles.card}>
							<h3 className={styles.card_title}>{cert.title}</h3>
							<p className={styles.card_issuer}>{cert.issuer}</p>
							{cert.link && (
								<a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.card_link}
								>
									Ver certificado
								</a>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certificates;
