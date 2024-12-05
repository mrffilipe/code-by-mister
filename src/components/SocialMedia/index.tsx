import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

import styles from "./styles.module.css";

type Props = {
	className?: string;
};

const SocialMedia = ({ className }: Props) => {
	return (
		<div className={`${styles.social_media} ${className}`}>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a href="#">
				<LinkedIn />
			</a>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a href="#">
				<GitHub />
			</a>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a href="#">
				<Instagram />
			</a>
		</div>
	);
};

export default SocialMedia;
