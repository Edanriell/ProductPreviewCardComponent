import { css } from "@emotion/css";

export const productPreviewCard = css`
	display: flex;
	flex-direction: column;
	background: var(--pure-white);
	border-radius: 1rem;
	margin: 0 1.6rem;
	overflow: hidden;
`;

export const productPreviewCardImage = css`
	width: 100%;
	max-height: 24rem;
	object-fit: cover;
`;

export const productPreviewCardContent = css`
	padding: 2.4rem;
`;

export const productPreviewCardCategory = css`
	font-family: var(--font-family), serif;
	font-weight: 500;
	font-size: 1.2rem;
	letter-spacing: 0.42em;
	color: var(--aurometal-saurus);
	margin-bottom: 0.8rem;
	text-transform: uppercase;
`;

export const productPreviewCardTitle = css`
	font-family: var(--second-family), serif;
	font-weight: 700;
	font-size: 3.2rem;
	line-height: 100%;
	color: var(--gunmetal);
	margin-bottom: 1.3rem;
`;

export const productPreviewCardDescription = css`
	font-family: var(--font-family), serif;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 164%;
	color: var(--aurometal-saurus);
	margin-bottom: 2rem;
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
	margin-bottom: 1.7rem;
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
