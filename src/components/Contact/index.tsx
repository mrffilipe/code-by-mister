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
					<div className={styles.info}>
						<h3 className={styles.info_title}>Minhas Redes</h3>
						<a
							className={styles.email}
							href="mailto:seuemail@exemplo.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							seuemail@exemplo.com
						</a>
						<ul className={styles.links}>
							<li>
								<a
									href="https://linkedin.com/in/seuperfil"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/seuperfil"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://wa.me/seunumero"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}
								>
									WhatsApp
								</a>
							</li>
						</ul>
					</div>
					<form className={styles.form}>
						<label>
							Nome
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Seu nome"
								required
							/>
						</label>
						<label>
							Email
							<input
								type="email"
								id="email"
								name="email"
								placeholder="seuemail@exemplo.com"
								required
							/>
						</label>
						<label>
							Mensagem
							<textarea
								id="message"
								name="message"
								rows={4}
								placeholder="Sua mensagem"
								required
							/>
						</label>
						<button type="submit" className={styles.button}>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
