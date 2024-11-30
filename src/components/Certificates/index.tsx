import styles from "./styles.module.css";

const certificates = [
	{
		id: 1,
		title: "Engenharia de Software Moderna",
		issuer: "Alura",
		date: "Janeiro de 2024",
		link: "https://alura.com/certificado-exemplo",
	},
	{
		id: 2,
		title: "Desenvolvimento Backend Avançado",
		issuer: "Udemy",
		date: "Outubro de 2023",
		link: "https://udemy.com/certificado-exemplo",
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
							<p className={styles.card_date}>{cert.date}</p>
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
