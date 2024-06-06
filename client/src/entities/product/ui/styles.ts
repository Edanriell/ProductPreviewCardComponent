import { css } from "@emotion/css";

export const productPreviewCard = css`
	display: flex;
	flex-direction: column;
	background: var(--pure-white);
	border-radius: 1rem;
	margin: 0 1.6rem;
	overflow: hidden;
	@media (width >= 768px) {
		flex-direction: row;
	}
`;

export const productPreviewCardImage = css`
	width: 100%;
	max-height: 240vw;
	object-fit: cover;
	@media (width >= 768px) {
		max-width: 30rem;
		height: 100%;
		// max-height: 45rem;
	}
`;

export const productPreviewCardContent = css`
	padding: 2.4rem;
	@media (width >= 768px) {
		padding: 3.2rem;
		max-width: 30rem;
	}
`;

export const productPreviewCardCategory = css`
	font-family: var(--font-family), serif;
	font-weight: 500;
	font-size: 1.2rem;
	letter-spacing: 0.42em;
	color: var(--aurometal-saurus);
	// margin-bottom: 0.8rem;
	margin-bottom: 1.2rem;
	text-transform: uppercase;
	@media (width >= 768px) {
		// margin-bottom: 1.6rem;
		margin-bottom: 2rem;
	}
`;

export const productPreviewCardTitle = css`
	font-family: var(--second-family), serif;
	font-weight: 700;
	font-size: 3.2rem;
	line-height: 100%;
	color: var(--gunmetal);
	// margin-bottom: 1.3rem;
	margin-bottom: 1.6rem;
	@media (width >= 768px) {
		// margin-bottom: 2.1rem;
		margin-bottom: 2.4rem;
	}
`;

export const productPreviewCardDescription = css`
	font-family: var(--font-family), serif;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 164%;
	color: var(--aurometal-saurus);
	// margin-bottom: 2rem;
	margin-bottom: 2.4rem;
	@media (width >= 768px) {
		// margin-bottom: 2.5rem;
		margin-bottom: 2.9rem;
	}
`;

export const productPreviewCardOriginalPrice = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 1.9rem;
	font-family: var(--second-family), serif;
	font-weight: 700;
	font-size: 3.2rem;
	line-height: 100%;
	color: var(--deep-aquamarine);
	// margin-bottom: 1.7rem;
	margin-bottom: 2rem;
	@media (width >= 768px) {
		// margin-bottom: 2.7rem;
		margin-bottom: 3rem;
	}
`;

export const productPreviewCardDiscountedPrice = css`
	font-family: var(--font-family), serif;
	font-weight: 500;
	font-size: 1.3rem;
	// line-height: 177%;
	text-decoration: line-through;
	color: var(--aurometal-saurus);
`;

export const button = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 1.1rem;
	width: 100%;
	max-height: 4.8rem;
	background: var(--deep-aquamarine);
	border-radius: 0.8rem;
	padding-top: 1.5rem;
	padding-bottom: 1.6rem;
	border: none;
	cursor: pointer;
`;

export const buttonText = css`
	font-family: var(--font-family), serif;
	font-weight: 700;
	font-size: 1.4rem;
	color: var(--pure-white);
`;
