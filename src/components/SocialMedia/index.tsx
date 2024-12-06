import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

import styles from "./styles.module.css";

type Props = {
	className?: string;
};

const SocialMedia = ({ className }: Props) => {
	return (
		<div className={`${styles.social_media} ${className}`}>
			<a
				href="https://www.linkedin.com/in/mrffilipe/?locale=pt_BR"
				target="_blank"
				rel="noreferrer"
			>
				<LinkedIn />
			</a>
			<a href="https://github.com/mrffilipe" target="_blank" rel="noreferrer">
				<GitHub />
			</a>
			<a
				href="https://www.instagram.com/msr.filipe/"
				target="_blank"
				rel="noreferrer"
			>
				<Instagram />
			</a>
		</div>
	);
};

export default SocialMedia;
