import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

import styles from "./styles.module.css";

const Contact = () => {
	return (
		<section id="contact" className={styles.contact}>
			<div className={styles.container}>
				<h2 className={styles.title}>Entre em Contato</h2>
				<p className={styles.subtitle}>
					Vamos trabalhar juntos? Me envie uma mensagem ou entre em contato
					pelas redes sociais.
				</p>
				<div className={styles.content}>
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a className={styles.social_media} href="#">
						<LinkedIn />
					</a>
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a className={styles.social_media} href="#">
						<GitHub />
					</a>
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a className={styles.social_media} href="#">
						<Instagram />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
